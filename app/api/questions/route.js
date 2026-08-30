import { askGemini } from "@/lib/gemini";

export async function POST(request) {

    try {

        const {
            country,
            region,
            domain,
            language
        } = await request.json();

        const prompt = `
You are the AfriVerse Knowledge Question Generator.

Generate high-quality questions designed to capture
localized African knowledge.

Country:
${country}

Region:
${region}

Domain:
${domain}

Language:
${language}

The questions must:

- focus on practical local knowledge
- avoid leading the respondent
- avoid assuming that a traditional practice is correct
- produce information that can be geographically contextualized
- be understandable to ordinary people
- be useful for future AI systems
- identify knowledge gaps

Generate exactly 5 questions.

Return JSON:

{
  "questions": [
    {
      "question": "...",
      "knowledgeType": "...",
      "whyItMatters": "..."
    }
  ]
}
`;

        const result = await askGemini(prompt);

        return Response.json({
            questions: result
        });

    } catch (error) {

        return Response.json(
            {
                error: "Question generation failed."
            },
            {
                status: 500
            }
        );

    }
}