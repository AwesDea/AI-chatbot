import { HfInference } from '@huggingface/inference';
import fetch from 'node-fetch';

// Make fetch available globally
global.fetch = fetch as any;

// Initialize the Hugging Face Inference client
const hf = new HfInference(process.env.HF_API_TOKEN);

// Model ID for a conversational AI model
const MODEL_ID = 'facebook/blenderbot-400M-distill';

export async function generateAIResponse(message: string): Promise<string> {
  try {
    //console.log('sending request to HF');

    // Call the Hugging Face API to generate a response
    const response = await hf.textGeneration({
        model: MODEL_ID,
        inputs: message,
        parameters: {
          max_new_tokens: 50,
          temperature: 0.7,
          top_k: 50,
          top_p: 0.95,
        },
      });
    // Extract and return the generated text
    return response.generated_text;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw new Error('Failed to generate AI response');
  }
}