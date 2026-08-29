export async function POST(request) {

    try {

        const body = await request.json();

        const question = body.question?.trim();


        if (!question) {

            return Response.json(
                {
                    error: "Question is required."
                },
                {
                    status: 400
                }
            );

        }


        /*
         * MVP RESPONSE ENGINE
         *
         * This is intentionally simulated for the first prototype.
         *
         * Later this route will call Gemini and the
         * AfriVerse Knowledge Engine.
         */


        let answer =
            "AfriVerse would process this question through its contextual knowledge layer, combining relevant African knowledge, provenance and validation signals before generating an answer.";


        if (
            question.toLowerCase().includes("farming") ||
            question.toLowerCase().includes("agriculture")
        ) {

            answer =
                "Across different parts of Africa, agricultural practices are shaped by rainfall patterns, soil conditions, local crops and accumulated community knowledge. For northern Nigeria, a production AfriVerse system could combine community contributions, agricultural research and expert validation to identify practices relevant to specific locations and seasons.";

        }


        if (
            question.toLowerCase().includes("language") ||
            question.toLowerCase().includes("languages")
        ) {

            answer =
                "Nigeria is highly linguistically diverse, with hundreds of languages spoken across different regions. A production AfriVerse knowledge layer could connect language information to geography, community contributions, cultural context and linguistic resources.";

        }


        return Response.json({

            answer,

            context:
                "Nigeria · African contextual knowledge",

            confidence: 82,

            provenance: [
                "Community knowledge",
                "Research",
                "Expert validation"
            ]

        });


    } catch (error) {

        return Response.json(
            {
                error:
                    "Unable to process AfriVerse request."
            },
            {
                status: 500
            }
        );

    }
}