'use server';

import { generateContactReply } from '@/ai/flows/contact-reply-flow';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  try {
    // 1. Generate Personalized AI Reply content
    const aiReply = await generateContactReply({ name, service, message });

    // 2. Integration: Google Apps Script (as per PRD)
    // In production, set APPS_SCRIPT_URL in your environment variables
    const scriptUrl = process.env.APPS_SCRIPT_URL;
    
    if (scriptUrl) {
      await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          service,
          message,
          ai_suggested_reply: aiReply.body,
          timestamp: new Date().toISOString(),
        }),
      });
    }

    // 3. Log for development visibility
    console.log('--- New Lead Captured ---');
    console.log(`To: ${email}`);
    console.log(`Subject: ${aiReply.subject}`);
    console.log(`Content: ${aiReply.body}`);
    console.log('-------------------------');

    return { success: true, message: "Flow initiated. Check your email soon!" };
  } catch (error) {
    console.error('Contact submission error:', error);
    return { success: false, message: "The flow was interrupted. Please try again." };
  }
}
