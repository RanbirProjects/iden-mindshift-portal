
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateSitemapAndResearch() {
  const prompt = `
    Analyze the following website contexts and design styles:
    1. Formless.xyz (Illuminating true human purpose through technology)
    2. North.Cloud (AI-powered FinOps, cloud costs)
    3. TheBranx (Trends, branding, startup design)
    4. TheWone.co (AI recruiting software)

    Create a comprehensive Sitemap and Design Research summary for a new brand that combines "IDEN Engine" (high-tech infrastructure) and "MindShift Programs" (human cognitive evolution).

    The sitemap must include 4 main sections: Landing Page, IDEN Engine, MindShift Programs, and Blog.
    Return the response in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sitemap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  keyFeatures: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
              }
            },
            researchSummary: {
              type: Type.STRING,
              description: "A summary of how to integrate branding guidelines from the inspiration sites."
            }
          },
          required: ["sitemap", "researchSummary"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini research error:", error);
    return null;
  }
}
