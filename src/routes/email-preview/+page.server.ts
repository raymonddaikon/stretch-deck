import {
	createEmail,
	emailList,
	sendEmail
} from 'svelte-email-tailwind/preview'
import { RESEND_API_KEY } from '$env/static/private'

export async function load() {
	// return the list of email components
	return emailList()
}

export const actions = {
	// Pass in the two actions. Provide your Resend API key.
	...createEmail,
	...sendEmail({ resendApiKey: RESEND_API_KEY })
}
