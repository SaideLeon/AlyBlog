'use server';

/**
 * @fileOverview An AI-powered content suggestion tool for blog administrators.
 *
 * - suggestPostTopics - A function that suggests blog post topics based on user comments and available material.
 * - SuggestPostTopicsInput - The input type for the suggestPostTopics function.
 * - SuggestPostTopicsOutput - The return type for the suggestPostTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPostTopicsInputSchema = z.object({
  userComments: z
    .string()
    .describe('User-generated comments on existing blog posts.'),
  availableMaterial: z
    .string()
    .describe('Available blog content and other relevant material.'),
});
export type SuggestPostTopicsInput = z.infer<typeof SuggestPostTopicsInputSchema>;

const SuggestPostTopicsOutputSchema = z.object({
  suggestedTopics: z
    .array(z.string())
    .describe('A list of suggested blog post topics.'),
});
export type SuggestPostTopicsOutput = z.infer<typeof SuggestPostTopicsOutputSchema>;

export async function suggestPostTopics(
  input: SuggestPostTopicsInput
): Promise<SuggestPostTopicsOutput> {
  return suggestPostTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPostTopicsPrompt',
  input: {schema: SuggestPostTopicsInputSchema},
  output: {schema: SuggestPostTopicsOutputSchema},
  prompt: `You are a blog content creation expert specializing in generating engaging blog topics.

  Based on user comments and available material, generate a list of blog post topic suggestions.
  User Comments: {{{userComments}}}
  Available Material: {{{availableMaterial}}}

  Please provide a list of blog post topic suggestions that would resonate with the user base and align with the available content.
  The list should contain concise and catchy topic suggestions that are suitable for blog posts.
  `, 
});

const suggestPostTopicsFlow = ai.defineFlow(
  {
    name: 'suggestPostTopicsFlow',
    inputSchema: SuggestPostTopicsInputSchema,
    outputSchema: SuggestPostTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
