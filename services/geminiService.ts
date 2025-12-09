import { GoogleGenAI } from "@google/genai";
import { GeneratorParams } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateJobDescription = async (params: GeneratorParams): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const prompt = `
    Erstelle eine professionelle, einladende und strukturierte Stellenanzeige (auf Deutsch) für einen Kindergarten oder eine Kita.
    
    Details:
    - Position: ${params.jobTitle}
    - Einrichtung: ${params.facilityName}
    - Ort: ${params.city}
    - Besondere Vorteile/Highlights: ${params.benefits}

    Die Anzeige sollte folgende Abschnitte enthalten:
    1. Einleitung (Warum wir?)
    2. Ihre Aufgaben
    3. Ihr Profil
    4. Wir bieten
    5. Kontakt / Bewerbung

    Verwende eine herzliche, aber professionelle Tonalität.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Es konnte keine Beschreibung generiert werden.";
  } catch (error) {
    console.error("Error generating job description:", error);
    throw new Error("Fehler bei der Generierung der Stellenanzeige. Bitte versuchen Sie es später erneut.");
  }
};
