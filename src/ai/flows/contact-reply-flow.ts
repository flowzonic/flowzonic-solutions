'use server';
/**
 * @fileOverview A flow to generate personalized contact form replies.
 * 
 * - generateContactReply - Generates a professional, personalized auto-reply.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContactReplyInputSchema = z.object({
  name: z.string().describe('The name of the lead.'),
  service: z.string().describe('The service they are interested in.'),
  message: z.string().describe('The message they sent.'),
});

const ContactReplyOutputSchema = z.object({
  subject: z.string().describe('A catchy, professional email subject line.'),
  body: z.string().describe('The personalized email body in plain text.'),
});

export type ContactReplyInput = z.infer<typeof ContactReplyInputSchema>;
export type ContactReplyOutput = z.infer<typeof ContactReplyOutputSchema>;

export async function generateContactReply(input: ContactReplyInput): Promise<ContactReplyOutput> {
  return contactReplyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactReplyPrompt',
  input: { schema: ContactReplyInputSchema },
  output: { schema: ContactReplyOutputSchema },
  prompt: `You are the AI assistant for Flowzonic Solution, a high-end digital agency.
A new lead has contacted us with the following details:
Name: {{{name}}}
Service: {{{service}}}
Message: {{{message}}}

Generate a highly professional, warm, and personalized auto-reply email. 
The tone should be "Premium, Modern, and Efficient". 
Mention that a human from our team will review their specific request about "{{{service}}}" and get back to them within 24 hours.

Do not use placeholders like [Your Name], use "The Flowzonic Team".`,
});

const contactReplyFlow = ai.defineFlow(
  {
    name: 'contactReplyFlow',
    inputSchema: ContactReplyInputSchema,
    outputSchema: ContactReplyOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
