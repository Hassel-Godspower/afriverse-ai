import { NextResponse } from "next/server";
import { askAfriVerse } from "@/lib/gemini";

export async function POST(request) {

    try {

        const body = await request.json();

        const {
            question,
            country = "Nigeria",
            region = "Northern Nigeria",
            language = "English",
            domain = "Agriculture",
        } = body;

        if (!question || !question.trim()) {

            return NextResponse.json(
                {
                    error: "Question is required."
                },
                {
                    status: 400
                }
            );

        }

        const response = await askAfriVerse({
            question: question.trim(),
            country,
            region,
            language,
            domain,
        });

        const answer = response.text || "";

        /*
         * Extract grounding metadata.
         */

        const groundingMetadata =
            response.candidates?.[0]?.groundingMetadata || null;

        /*
         * Extract web sources.
         */

        const sources = [];

        const groundingChunks =
            groundingMetadata?.groundingChunks || [];

        groundingChunks.forEach((chunk) => {

            if (chunk.web) {

                sources.push({
                    title: chunk.web.title || "Web source",
                    url: chunk.web.uri || "",
                });

            }

        });

        /*
         * Remove duplicate sources.
         */

        const uniqueSources = sources.filter(
            (source, index, self) =>
                index ===
                self.findIndex(
                    (item) => item.url === source.url
                )
        );

        /*
         * Determine confidence.
         *
         * This is intentionally labelled as an
         * MVP heuristic, not scientific confidence.
         */

        let confidence = "Medium";

        if (uniqueSources.length >= 3) {
            confidence = "High";
        }

        if (uniqueSources.length === 0) {
            confidence = "Low";
        }

        /*
         * Determine validation status.
         *
         * Since this MVP is not yet connected to
         * the AfriVerse expert-validation database,
         * we explicitly say so.
         */

        const validation = "Pending";

        /*
         * Knowledge classification.
         */

        const knowledgeType =
            uniqueSources.length > 0
                ? "Web-grounded knowledge"
                : "Model knowledge";

        return NextResponse.json({

            answer,

            context: {
                country,
                region,
                language,
                domain,
            },

            knowledge: {
                type: knowledgeType,
            },

            validation,

            confidence,

            sources: uniqueSources,

            provenance: {
                provider: "Google Search grounding",
                status:
                    uniqueSources.length > 0
                        ? "Grounded"
                        : "Not grounded",
            },

            generatedAt:
                new Date().toISOString(),

        });

    } catch (error) {

        console.error(
            "AfriVerse API error:",
            error
        );

        return NextResponse.json(
            {
                error:
                    "AfriVerse could not process this request."
            },
            {
                status: 500
            }
        );

    }
}
