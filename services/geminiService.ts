
import { GoogleGenAI } from "@google/genai";
import { Submission } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you would want to handle this more gracefully.
  // For this example, we assume the API_KEY is set in the environment.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getAiSuggestions = async (submission: Submission): Promise<string> => {
  try {
    const prompt = `
      As an experienced Project Manager, analyze the following anonymous feedback and provide actionable suggestions.
      Your response should be structured to help another PM understand the core issue and formulate a constructive plan.
      Do not address the submitter directly. Provide advice for the PM who received this feedback.
      
      Focus on:
      1.  Key takeaways from the submission.
      2.  Potential root causes to investigate.
      3.  Specific, actionable steps the PM can take.
      4.  How to best phrase a reply to the submitter to encourage further dialogue.
      
      ---
      
      **Category:** ${submission.category}
      
      **Impact Scores:**
      - Budget: ${submission.impact.budget}/5
      - Timeline: ${submission.impact.timeline}/5
      - Scope: ${submission.impact.scope}/5
      
      **Situation (What happened):**
      ${submission.situation}
      
      **Impact (Why it's a problem):**
      ${submission.problem}
      
      **Submitter's Suggestion:**
      ${submission.suggestion}
      
      ---
      
      Provide your analysis below:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error fetching AI suggestions:", error);
    return "An error occurred while fetching AI suggestions. Please check your API key and network connection.";
  }
};
