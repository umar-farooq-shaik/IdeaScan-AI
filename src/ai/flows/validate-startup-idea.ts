'use server';

/**
 * @fileOverview An AI agent that validates a startup idea by analyzing its market potential,
 * competition, and investor interest.
 *
 * - validateStartupIdea - A function that handles the startup idea validation process.
 * - ValidateStartupIdeaInput - The input type for the validateStartupIdea function.
 * - ValidateStartupIdeaOutput - The return type for the validateStartupIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateStartupIdeaInputSchema = z.object({
  userInput: z
    .string()
    .describe('A detailed description of the startup idea provided by the user.'),
});
export type ValidateStartupIdeaInput = z.infer<typeof ValidateStartupIdeaInputSchema>;

const ValidateStartupIdeaOutputSchema = z.object({
  marketDemand: z.object({score: z.number().describe('Market Demand Score (1-10)'), reason: z.string().describe('Reasoning for the Market Demand score.')}),
  competition: z.object({score: z.number().describe('Competition Level Score (1-10)'), reason: z.string().describe('Reasoning for the Competition Level score.')}),
  investorInterest: z.object({score: z.number().describe('Investor Interest Score (1-10)'), reason: z.string().describe('Reasoning for the Investor Interest score.')}),
  uniqueness: z.object({score: z.number().describe('Uniqueness & Feasibility Score (1-10)'), reason: z.string().describe('Reasoning for the Uniqueness & Feasibility score.')}),
  suggestion: z.string().describe('A suggestion for improvement or a pivot for the startup idea.'),
});
export type ValidateStartupIdeaOutput = z.infer<typeof ValidateStartupIdeaOutputSchema>;

export async function validateStartupIdea(input: ValidateStartupIdeaInput): Promise<ValidateStartupIdeaOutput> {
  return validateStartupIdeaFlow(input);
}

const mainValidationPrompt = ai.definePrompt({
  name: 'mainValidationPrompt',
  input: {schema: ValidateStartupIdeaInputSchema},
  output: {schema: ValidateStartupIdeaOutputSchema},
  prompt: `You are a startup mentor AI. Evaluate the following idea across 4 key factors:

1. Market Demand (Score 1–10 + reason)
2. Competition Level (Score 1–10 + reason)
3. Investor Trends (Score 1–10 + reason)
4. Uniqueness & Feasibility (Score 1–10 + reason)
5. Suggest 1 improvement or pivot.

Respond in JSON format:
{
  "marketDemand": { "score": X, "reason": "..." },
  "competition": { "score": X, "reason": "..." },
  "investorInterest": { "score": X, "reason": "..." },
  "uniqueness": { "score": X, "reason": "..." },
  "suggestion": "..."
}
Startup Idea: {{{userInput}}}`,
});

const validateStartupIdeaFlow = ai.defineFlow(
  {
    name: 'validateStartupIdeaFlow',
    inputSchema: ValidateStartupIdeaInputSchema,
    outputSchema: ValidateStartupIdeaOutputSchema,
  },
  async input => {
    const {output} = await mainValidationPrompt(input);
    return output!;
  }
);
