'use server';
/**
 * @fileOverview AI flow to analyze and categorize incoming leads.
 * 
 * - analyzeLead - Analyzes the contact message to provide a priority and summary.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeLeadInputSchema = z.object({
  name: z.string(),
  service: z.string(),
  message: z.string(),
});

const AnalyzeLeadOutputSchema = z.object({
  priority: z.enum(['low', 'medium', 'high']),
  summary: z.string().describe('A 1-sentence summary of what the lead wants.'),
  suggestedNextStep: z.string().describe('The best way to respond to this lead.'),
});

export type AnalyzeLeadInput = z.infer<typeof AnalyzeLeadInputSchema>;
export type AnalyzeLeadOutput = z.infer<typeof AnalyzeLeadOutputSchema>;

const analyzePrompt = ai.definePrompt({
  name: 'analyzeLeadPrompt',
  input: { schema: AnalyzeLeadInputSchema },
  output: { schema: AnalyzeLeadOutputSchema },
  prompt: `You are an expert sales assistant for Flowzonic Solution, a premium web dev and automation agency.
Analyze the following lead from our contact form:

Name: {{{name}}}
Service: {{{service}}}
Message: {{{message}}}

Provide a priority level based on intent, a concise summary, and a suggested next step for the sales team.`,
});

export async function analyzeLead(input: AnalyzeLeadInput): Promise<AnalyzeLeadOutput> {
  const { output } = await analyzePrompt(input);
  if (!output) throw new Error('AI failed to analyze the lead.');
  return output;
}
