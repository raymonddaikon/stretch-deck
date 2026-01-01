import { co, Group, type ID, z } from 'jazz-tools'
import { authClient } from '$lib/auth/auth.client'

const BodyPart = z.enum([
	'neck',
	'bicep',
	'tricep',
	'wrist',
	'delt',
	'trap',
	'rotator cuff',
	'ab',
	'oblique',
	'chest',
	'hip flexor',
	'glute',
	'groin',
	'hamstring',
	'quad',
	'calf',
	'lumbar',
	'lat',
	'ankle',
	'foot',
	'forearm',
	'psoas'
])

// This is so when we merge an anon account into a logged in account we preserve deck and card data.
export async function onAnonymousAccountDiscarded(
	anonymousAccount: co.loaded<typeof StretchDeckAccount>
) {
	const { root: anonymousAccountRoot, profile: anonProfile } =
		await anonymousAccount.$jazz.ensureLoaded({
			resolve: {
				root: true,
				profile: {
					decks: { $each: true },
					cards: { $each: true }
				}
			}
		})

	const me = await StretchDeckAccount.getMe().$jazz.ensureLoaded({
		resolve: {
			profile: {
				decks: true,
				cards: true
			}
		}
	})

	for (const card of anonProfile.cards.$isLoaded ? anonProfile.cards : []) {
		const cardGroup = card.$jazz.owner
		cardGroup.addMember(me, 'admin')

		me.profile.cards.$jazz.push(card)
	}

	for (const deck of anonProfile.decks.$isLoaded ? anonProfile.decks : []) {
		const deckGroup = deck.$jazz.owner
		deckGroup.addMember(me, 'admin')

		me.profile.decks.$jazz.push(deck)
	}
}

export const ActivityItem = co
	.map({
		completed: z.date()
	})
	.withPermissions({
		default: () => Group.create().makePublic(),
		onInlineCreate: 'sameAsContainer'
	})

export const ActivityFeed = co.feed(ActivityItem).withPermissions({
	default: () => Group.create().makePublic('writer'),
	onInlineCreate: 'sameAsContainer'
})

export const Thumbnail = co.image().withPermissions({
	default: () => Group.create().makePublic(),
	onInlineCreate: 'sameAsContainer'
})

export const Thumbnails = co.list(Thumbnail).withPermissions({
	default: () => Group.create().makePublic(),
	onInlineCreate: 'sameAsContainer'
})

export const StretchCard = co
	.map({
		type: z.literal('stretch'),
		areas: z.array(z.string()),
		get thumbnails() {
			return Thumbnails
		},
		name: z.string(),
		shareSecret: z.string(),
		description: z.string(),
		reps: z.number(),
		units: z.enum(['seconds', 'minutes', 'reps']),
		sets: z.number(),
		activity: ActivityFeed,
		get creator() {
			return User
		}
	})
	.withPermissions({
		default: () => Group.create().makePublic(),
		onInlineCreate: 'sameAsContainer'
	})

export const Card = co.discriminatedUnion('type', [StretchCard])

export const Deck = co
	.map({
		name: z.string(),
		description: z.optional(z.string()),
		shareSecret: z.string(),
		get creator() {
			return User
		},
		get cards(): co.List<typeof Card> {
			return co.list(Card)
		},
		activity: ActivityFeed
	})
	.withPermissions({
		default: () => Group.create().makePublic(),
		onInlineCreate: 'sameAsContainer'
	})

export const Decks = co.list(Deck).withPermissions({
	default: () => Group.create().makePublic(),
	onInlineCreate: 'sameAsContainer'
})

export const Cards = co.list(Card).withPermissions({
	default: () => Group.create().makePublic(),
	onInlineCreate: 'sameAsContainer'
})

export const AccountRoot = co.map({
	accountId: z.optional(z.string()),
	providerId: z.optional(z.string()),
	accessToken: z.optional(z.string()),
	refreshToken: z.optional(z.string()),
	accessTokenExpires: z.optional(z.date()),
	refreshTokenExpires: z.optional(z.date()),
	scope: z.optional(z.string()),
	idToken: z.optional(z.string()),
	language: z.optional(z.string()),
	settings: z.optional(z.object()),
	emailVerified: z.boolean()
	// two_factor_enabled: z.boolean(),
	// stripe_customer_id: z.optional(z.string())
	// notifications: co.inbox
})

export const User = co
	.profile({
		name: z.string(),
		email: z.optional(z.string()),
		imageUrl: z.optional(z.string()),
		username: z.optional(z.string()),
		displayName: z.optional(z.string()),
		anonymous: z.boolean(),
		// inbox: z.z.core.$ZodOptional<z.z.core.$ZodString>,
		// inboxInvite: z.z.core.$ZodOptional<z.z.core.$ZodString>,
		get friends(): co.List<typeof User> {
			return co.list(User)
		},
		get decks(): typeof Decks {
			return Decks
		},
		get cards(): typeof Cards {
			return Cards
		}
	})
	.withPermissions({
		default: () => Group.create().makePublic(),
		onInlineCreate: 'sameAsContainer'
	})

export const StretchDeckAccount = co
	.account({
		root: AccountRoot,
		profile: User
	})
	.withMigration((account, creationProps?: { name: string }) => {
		console.log('Migration run')
		// console.log(account.root);
		// console.log(account.profile);
		// if (account._refs.root) return
		// const currentDate = new Date();
		// This will only run for anon accounts.
		if (account && !account.$jazz.has('root')) {
			account.$jazz.set(
				'root',
				AccountRoot.create({
					emailVerified: false
					// two_factor_enabled: false
					// user: account.profile!,
					// account_id: user.account_id,
					// provider_id: user.provider_id,
					// access_token: user.access_token,
					// refresh_token: user.refresh_token,
					// access_token_expires: user.access_token_expires,
					// refresh_token_expires: user.refresh_token_expires,
					// scope: user.scope,
					// id_token: user.id_token,
					// language: user.language,
					// stripe_customer_id: user.stripe_customer_id
					// settings: {},
					// notifications: co.feed(Notifications).create([], { owner: this }),
				})
			)
		}

		if (account && !account.$jazz.has('profile')) {
			console.log('Profile migration running')
			const profileGroup = Group.create({ owner: account })
			profileGroup.makePublic('reader')

			// const publicWritableGroup = Group.create()
			// publicWritableGroup.makePublic('reader')
			// publicWritableGroup.addMember(profileGroup)

			account.$jazz.set(
				'profile',
				User.create(
					{
						name: creationProps?.name ?? '',
						// email: user.email,
						// image_url: user.image_url,
						// username: user.username,
						// display_name: user.display_name,
						email: undefined,
						imageUrl: undefined,
						username: undefined,
						displayName: undefined,
						// inbox: undefined,
						// inboxInvite: undefined,
						anonymous: true,
						// documents: co.list(co.discriminatedUnion('type', [Task, Workflow, Blueprint])).create([]),
						// watching: User.def.shape.watching.create([]),
						friends: co.list(User).create([]),
						decks: Decks.create([]),
						cards: Cards.create([])
					},
					profileGroup
				)
			)
		}
	})

export async function onSignUp(account: co.loaded<typeof StretchDeckAccount>) {
	if (!account.profile) {
		console.log('Account profile not found, something went wrong')
		return
	}
	if (!account.root) {
		console.log('Account root not found, something went wrong')
		return
	}
	const session = await authClient.getSession()
	if (!session || !('data' in session) || !session?.data) return

	const { data: accounts } = await authClient.listAccounts()

	if (account.root.$isLoaded) {
		account.root.$jazz.applyDiff({
			emailVerified: session.data.user.emailVerified ?? false,
			accountId: accounts?.[0].accountId ?? account.root.accountId,
			providerId: accounts?.[0].providerId ?? account.root.providerId,
			accessToken: session.data.session.token ?? account.root.accessToken
			// refresh_token: user.refresh_token ?? account.root.refresh_token,
			// access_token_expires: user.access_token_expires ?? account.root.access_token_expires,
			// refresh_token_expires: user.refresh_token_expires ?? account.root.refresh_token_expires,
			// scope: user.scope ?? account.root.scope,
			// id_token: user.id_token ?? account.root.id_token,
			// language: user.language ?? undefined,
			// stripe_customer_id: user.stripe_customer_id ?? account.root.stripe_customer_id,
			// settings: user.settings
		})
	}

	if (account.profile.$isLoaded) {
		account.profile.$jazz.applyDiff({
			anonymous: false,
			name: session.data.user.name,
			email: session.data.user.email ?? undefined,
			imageUrl: session.data.user.image ?? undefined
			// username: session.data.user.username ?? undefined,
			// displayName: session.data.user.displayName ?? undefined,
		})

		account.profile.$jazz.owner.makePublic('reader')
	}
}
