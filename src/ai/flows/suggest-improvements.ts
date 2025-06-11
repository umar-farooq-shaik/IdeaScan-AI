// src/ai/flows/suggest-improvements.ts
'use server';

/**
 * @fileOverview AI-powered suggestion of improvements for a startup idea.
 *
 * - suggestImprovements - A function that suggests improvements for a startup idea.
 * - SuggestImprovementsInput - The input type for the suggestImprovements function.
 * - SuggestImprovementsOutput - The return type for the suggestImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestImprovementsInputSchema = z.object({
  userInput: z.string().describe('The user-submitted startup idea description.'),
  marketDemandScore: z.number().describe('The market demand score of the idea (1-10).'),
  competitionLevelScore: z.number().describe('The competition level score of the idea (1-10).'),
  investorInterestScore: z.number().describe('The investor interest score of the idea (1-10).'),
  uniquenessFeasibilityScore: z.number().describe('The uniqueness and feasibility score of the idea (1-10).'),
});
export type SuggestImprovementsInput = z.infer<typeof SuggestImprovementsInputSchema>;

const SuggestImprovementsOutputSchema = z.object({
  suggestion: z.string().describe('A suggestion to improve or pivot the startup idea.'),
});
export type SuggestImprovementsOutput = z.infer<typeof SuggestImprovementsOutputSchema>;

export async function suggestImprovements(input: SuggestImprovementsInput): Promise<SuggestImprovementsOutput> {
  return suggestImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestImprovementsPrompt',
  input: {schema: SuggestImprovementsInputSchema},
  output: {schema: SuggestImprovementsOutputSchema},
  prompt: `You are a startup mentor AI, providing suggestions to improve startup ideas.

  Based on the initial analysis scores and the idea description, suggest one improvement or pivot to the idea.

  Idea Description: {{{userInput}}}
  Market Demand Score: {{{marketDemandScore}}}
  Competition Level Score: {{{competitionLevelScore}}}
  Investor Interest Score: {{{investorInterestScore}}}
  Uniqueness & Feasibility Score: {{{uniquenessFeasibilityScore}}}

  Respond with a single, concise suggestion.
  `,
});

const suggestImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestImprovementsFlow',
    inputSchema: SuggestImprovementsInputSchema,
    outputSchema: SuggestImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
