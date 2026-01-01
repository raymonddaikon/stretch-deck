<script lang="ts">
	import { page } from '$app/state';
	import { authClient } from '$lib/auth/auth.client';

	const token = $derived(page.url.searchParams.get('token'));

	async function verifyMagicLink(
		token: string | null
	): Promise<{ success: boolean; error?: string }> {
		if (!token) {
			return { success: false, error: 'No token provided' };
		}

		const { error } = await authClient.magicLink.verify({
			query: {
				token,
				callbackURL: '/profile'
			}
		});

		if (error) {
			return { success: false, error: 'Link expired, please try again' };
		}

		return { success: true };
	}

	const verificationPromise = $derived(verifyMagicLink(token));
</script>

{#await verificationPromise}
	<p>Logging in...</p>
{:then result}
	{#if result.success}
		<p>Success</p>
	{:else}
		<p>{result.error}</p>
	{/if}
{/await}
