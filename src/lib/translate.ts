/**
 * Translation utility using Google Cloud Translation API
 */

export async function translateText(text: string, targetLanguage: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

  if (!apiKey) {
    console.error("Google Translate API Key is missing");
    return text;
  }

  // If source and target are the same, return original
  if (targetLanguage === 'en') return text; 

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
        }),
      }
    );

    const data = await response.json();

    if (data.data && data.data.translations && data.data.translations.length > 0) {
      return data.data.translations[0].translatedText;
    }

    return text;
  } catch (error) {
    console.error("Translation Error:", error);
    return text;
  }
}
