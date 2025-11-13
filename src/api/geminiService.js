import { API_KEY, API_URL } from '../utils/constants';

/**
 * Utility function to handle API fetching with exponential backoff for retries.
 */
const exponentialBackoffFetch = async (url, options, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response;
        } catch (error) {
            if (i === retries - 1) {
                console.error("Max retries reached. Failed to fetch:", error);
                throw error;
            }
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

/**
 * Calls the Gemini API to get a product recommendation based on user input.
 */
export const getStabilizerRecommendation = async (requirements) => {
    const systemPrompt = `You are the Almods Electronics AI Consultant. Your goal is to analyze the user's technical requirements (load, phase, kVA, application) and recommend the best-suited stabilizer from the Almods product line. Provide a concise, professional recommendation in less than 100 words. Always include the recommended product series name (HomeGuard, AC Master Pro, or Industrial Dynamo) and a brief technical justification. If requirements are vague, state the need for more information.

    Almods Stabilizer Series:
    1. HomeGuard Series: 2-5 kVA, Single Phase, for home electronics/entertainment.
    2. AC Master Pro: 4-10 kVA, Single Phase, specialized for high-inrush current appliances (Inverter ACs, pumps).
    3. Industrial Dynamo: 10-50 kVA, Three Phase, for heavy industrial machinery and complex systems.

    Format the output with a bold title like "**Recommended Series: [Name]**" followed by the justification paragraph.`;

    const userQuery = `User Requirements: ${requirements}. Which Almods stabilizer series is best?`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const urlWithKey = `${API_URL}?key=${API_KEY}`;

    try {
        const response = await exponentialBackoffFetch(urlWithKey, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (text) {
            return text;
        } else {
            return "Recommendation failed: No valid response received from the AI consultant.";
        }
    } catch (error) {
        console.error("API call failed:", error);
        return "System error during consultation. Please check your connection or try again later.";
    }
};
