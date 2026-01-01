<script lang="ts">
	import {
		Body,
		Button,
		Container,
		Head,
		Heading,
		Hr,
		Html,
		Link,
		Section,
		Text
	} from 'svelte-email-tailwind';
	import { BASE_URL } from '$env/static/private';
	import * as m from '$lib/paraglide/messages';
	import { locales, localizeHref } from '$lib/paraglide/runtime';

	type Locale = (typeof locales)[number];

	type MagicLinkProps = {
		url: string;
		language?: Locale;
	};

	let { url = 'example.com', language = 'en' }: MagicLinkProps = $props();

	// Colors
	const colors = {
		background: '#f3fcff',
		foreground: '#1a1a2e',
		muted: '#6b6b8a',
		accent: '#0047ff',
		border: '#c5d8fd',
		primary: '#1a1a2e',
		primaryForeground: '#fafaff',
		white: '#ffffff'
	};

	// Grid unit - 1ch for monospace at 16px ≈ 10px
	// Using 10px as base unit for easy math and grid alignment
	const ch = 10; // px per character width
	const lineHeight = 1.5; // matches your theme

	// Font stack
	const fontMono = '"Departure Mono", Consolas, Monaco, "Courier New", monospace';

	// Grid background - size matches 1ch
	const gridSize = ch;
	const gridColor = '%23c5d8fd'; // URL-encoded #c5d8fd
	const gridSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${gridSize}' height='${gridSize}'%3E%3Cpath d='M ${gridSize} 0 L 0 0 0 ${gridSize}' fill='none' stroke='${gridColor}' stroke-width='1'/%3E%3C/svg%3E")`;

	// Inline styles - all spacing in multiples of ch (grid units)
	const bodyStyle = {
		fontFamily: fontMono,
		fontSize: '16px',
		lineHeight: `${lineHeight}`,
		backgroundImage: gridSvg,
		backgroundSize: `${gridSize}px ${gridSize}px`,
		backgroundColor: colors.background,
		margin: '0',
		padding: '0'
	};

	const containerStyle = {
		margin: '0 auto',
		maxWidth: `${56 * ch}px`, // 56ch wide
		padding: `${4 * ch}px ${1.5 * ch}px` // 4ch top/bottom, 2ch left/right
	};

	const headingSectionStyle = {
		padding: `0 0 ${ch}px 0` // 2ch bottom padding
	};

	const headingStyle = {
		margin: '0',
		fontSize: '24px',
		fontWeight: 'bold',
		lineHeight: `${lineHeight}`,
		color: colors.foreground,
		textAlign: 'left' as const
	};

	const hrStyle = {
		margin: `${2 * ch}px 0`, // 2ch vertical margin
		border: 'none',
		borderTop: `1px solid ${colors.border}`,
		height: '1px'
	};

	const textStyle = {
		margin: `0 0 0 0`, // 1ch bottom margin
		fontSize: '14px',
		lineHeight: `${lineHeight}`,
		color: colors.foreground
	};

	const buttonWrapperStyle = {
		padding: `${ch}px 0`, // 2ch vertical padding
		textAlign: 'left' as const
	};

	const buttonStyle = {
		backgroundColor: colors.primary,
		padding: `${ch}px ${2 * ch}px`, // 1ch vertical, 2ch horizontal
		fontSize: '14px',
		lineHeight: `${lineHeight}`,
		fontWeight: '500',
		color: colors.primaryForeground,
		textDecoration: 'none',
		display: 'inline-block'
	};

	const smallTextStyle = {
		margin: `${0.5 * ch}px 0 ${0.5 * ch}px 0`, // 1ch bottom margin
		fontSize: '12px',
		lineHeight: `${lineHeight}`,
		color: colors.muted
	};

	const linkTextStyle = {
		margin: `0 0 ${0.5 * ch}px 0`,
		fontSize: '12px',
		lineHeight: `${lineHeight}`,
		color: colors.accent,
		wordBreak: 'break-all' as const
	};

	const linkStyle = {
		color: colors.accent,
		textDecoration: 'none'
	};

	const footerSectionStyle = {
		maxWidth: `${56 * ch}px`,
		paddingTop: `0` // 1ch top padding
	};

	const footerTextStyle = {
		margin: '0',
		fontSize: '12px',
		lineHeight: `${lineHeight}`,
		color: colors.muted,
		textAlign: 'left' as const
	};
</script>

<Html lang="en">
	<Head>
		<!-- @font-face for email clients that support web fonts (Apple Mail, iOS Mail, Thunderbird) -->
		<!-- Wrapped in @media screen to prevent Outlook from downloading and falling back to Times New Roman -->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `
			<style>
				@media screen {
					@font-face {
						font-family: 'Departure Mono';
						font-style: normal;
						font-weight: 400;
						mso-font-alt: 'Courier New';
						src: url('${BASE_URL}/fonts/DepartureMono-Regular.woff2') format('woff2');
					}
				}
			</style>
		`}
	</Head>
	<Body style={bodyStyle}>
		<Container style={containerStyle}>
			<Container style={headingSectionStyle}>
				<!-- <Img src="{BASE_URL}/apple-logo.png" width="42" height="42" alt="Apple Logo" /> -->
				<Heading style={headingStyle}>Stretch Deck</Heading>
			</Container>

			<Container style={{ padding: 0 }}>
				<Text style={textStyle}>
					Click the button below to sign in to your Stretch Deck account. This link will expire in
					10 minutes.
					<!-- {m.delete({}, { locale: language })} -->
				</Text>

				<Container style={buttonWrapperStyle}>
					<Button href={url} style={buttonStyle}>Sign in to Stretch Deck</Button>
				</Container>

				<Text style={smallTextStyle}>
					If you didn't request this email, you can safely ignore it. If the button doesn't work,
					copy and paste this link into your browser:
				</Text>
				<Text style={linkTextStyle}>
					<Link href={url} style={linkStyle}>{url}</Link>
				</Text>
			</Container>

			<Hr style={hrStyle} />

			<Container style={footerSectionStyle}>
				<Text style={footerTextStyle}>Stretch Deck 2026</Text>
				<Text style={footerTextStyle}>This is an automated message, please do not reply.</Text>
			</Container>
		</Container>
	</Body>
</Html>
