"use client";

import { useState } from "react";

export default function QuestionsPage() {

    const [region, setRegion] = useState("Nigeria");

    const [domain, setDomain] =
        useState("Agriculture");

    const [questions, setQuestions] =
        useState([]);

    const [loading, setLoading] =
        useState(false);


    async function generateQuestions() {

        setLoading(true);

        try {

            const response = await fetch(
                "/api/questions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        region,
                        domain
                    })
                }
            );

            const data =
                await response.json();

            setQuestions(data.questions);

        } finally {

            setLoading(false);

        }
    }


    return (
        <main className="app-page">

            <div className="app-header">

                <div className="section-label">
                    KNOWLEDGE GENERATION
                </div>

                <h1>
                    Generate questions.
                </h1>

                <p>
                    Help discover the questions that can
                    reveal valuable local knowledge.
                </p>

            </div>


            <div className="generator-card">

                <label>
                    REGION
                </label>

                <select
                    value={region}
                    onChange={(e) =>
                        setRegion(e.target.value)
                    }
                >

                    <option>
                        Nigeria
                    </option>

                    <option>
                        Ghana
                    </option>

                    <option>
                        Kenya
                    </option>

                </select>


                <label>
                    DOMAIN
                </label>

                <select
                    value={domain}
                    onChange={(e) =>
                        setDomain(e.target.value)
                    }
                >

                    <option>
                        Agriculture
                    </option>

                    <option>
                        Culture
                    </option>

                    <option>
                        Health
                    </option>

                    <option>
                        Education
                    </option>

                    <option>
                        Business
                    </option>

                    <option>
                        Language
                    </option>

                </select>


                <button
                    className="btn btn-primary full"
                    onClick={generateQuestions}
                >

                    {loading
                        ? "Generating..."
                        : "Generate Questions →"}

                </button>

            </div>


            {questions.length > 0 && (

                <div className="generated-questions">

                    <div className="section-label">
                        QUESTIONS TO EXPLORE
                    </div>

                    {questions.map(
                        (question, index) => (

                            <article
                                className="question-card"
                                key={index}
                            >

                                <span>
                                    {String(
                                        index + 1
                                    ).padStart(2, "0")}
                                </span>

                                <p>
                                    {question}
                                </p>

                            </article>

                        )
                    )}

                </div>

            )}

        </main>
    );
}