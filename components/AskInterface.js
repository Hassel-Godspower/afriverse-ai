"use client";

import { useState } from "react";

export default function AskInterface() {

    const [question, setQuestion] = useState("");

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);


    const context = {
        country: "Nigeria",
        region: "Northern Nigeria",
        language: "English",
        domain: "Agriculture",
    };


    async function askQuestion() {

        if (!question.trim() || loading) {
            return;
        }


        const userQuestion = question.trim();

        setQuestion("");


        setMessages((previous) => [

            ...previous,

            {
                role: "user",
                content: userQuestion,
            },

        ]);


        setLoading(true);


        try {

            const response = await fetch(
                "/api/ask",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({

                        question: userQuestion,

                        ...context,

                    }),

                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.error ||
                    "Request failed"
                );

            }


            setMessages((previous) => [

                ...previous,

                {
                    role: "assistant",

                    content:
                        data.answer,

                    context:
                        data.context,

                    knowledge:
                        data.knowledge,

                    validation:
                        data.validation,

                    confidence:
                        data.confidence,

                    sources:
                        data.sources,

                    provenance:
                        data.provenance,
                },

            ]);

        }

        catch (error) {

            console.error(error);


            setMessages((previous) => [

                ...previous,

                {
                    role: "assistant",

                    content:
                        "AfriVerse could not process this request. Please try again.",

                },

            ]);

        }

        finally {

            setLoading(false);

        }

    }


    function handleSubmit(event) {

        event.preventDefault();

        askQuestion();

    }


    function useSuggestion(text) {

        setQuestion(text);

    }


    return (

        <div className="ask-interface">


            {/* =========================================
                CONTEXT PANEL
            ========================================== */}

            <div className="context-panel">

                <div className="context-title">

                    CONTEXT

                </div>


                <div className="context-grid">

                    <div>

                        <small>
                            COUNTRY
                        </small>

                        <strong>
                            {context.country}
                        </strong>

                    </div>


                    <div>

                        <small>
                            REGION
                        </small>

                        <strong>
                            {context.region}
                        </strong>

                    </div>


                    <div>

                        <small>
                            LANGUAGE
                        </small>

                        <strong>
                            {context.language}
                        </strong>

                    </div>


                    <div>

                        <small>
                            DOMAIN
                        </small>

                        <strong>
                            {context.domain}
                        </strong>

                    </div>

                </div>

            </div>


            {/* =========================================
                CHAT AREA
            ========================================== */}

            <div className="chat-area">


                {messages.length === 0 && (

                    <div className="welcome">

                        <div className="welcome-mark">
                            AV
                        </div>


                        <div className="eyebrow">
                            AFRIVERSE AI
                        </div>


                        <h1>
                            Ask AfriVerse.
                        </h1>


                        <p>
                            Understand the question.
                            Understand the context.
                            Generate an answer.
                        </p>


                        <div className="suggestions">

                            <button
                                onClick={() =>
                                    useSuggestion(
                                        "How do farmers in northern Nigeria conserve soil moisture during low rainfall periods?"
                                    )
                                }
                            >
                                Soil moisture conservation
                            </button>


                            <button
                                onClick={() =>
                                    useSuggestion(
                                        "What traditional farming practices are used in northern Nigeria?"
                                    )
                                }
                            >
                                Traditional farming
                            </button>


                            <button
                                onClick={() =>
                                    useSuggestion(
                                        "What crops are commonly grown in northern Nigeria and how are they adapted to low rainfall?"
                                    )
                                }
                            >
                                Crops and rainfall
                            </button>

                        </div>

                    </div>

                )}


                {messages.map(
                    (message, index) => (

                        <div
                            key={index}
                            className={
                                message.role === "user"
                                    ? "message user-message"
                                    : "message assistant-message"
                            }
                        >


                            <div className="message-label">

                                {message.role === "user"
                                    ? "YOU"
                                    : "AFRIVERSE AI"}

                            </div>


                            <div className="message-content">

                                {message.content}

                            </div>


                            {message.role ===
                                "assistant" &&
                                message.context && (

                                    <div className="answer-intelligence">


                                        {/* =================================
                                            CONTEXT
                                        ================================== */}

                                        <div className="intelligence-block">

                                            <span>
                                                CONTEXT
                                            </span>

                                            <strong>

                                                {message.context.country}

                                                {" · "}

                                                {message.context.region}

                                                {" · "}

                                                {message.context.language}

                                                {" · "}

                                                {message.context.domain}

                                            </strong>

                                        </div>


                                        {/* =================================
                                            KNOWLEDGE
                                        ================================== */}

                                        <div className="intelligence-block">

                                            <span>
                                                KNOWLEDGE
                                            </span>

                                            <strong>

                                                {message.knowledge?.type ||
                                                    "Knowledge retrieval"}

                                            </strong>

                                        </div>


                                        {/* =================================
                                            VALIDATION
                                        ================================== */}

                                        <div className="intelligence-block">

                                            <span>
                                                VALIDATION
                                            </span>

                                            <strong>

                                                {message.validation ||
                                                    "Pending"}

                                            </strong>

                                        </div>


                                        {/* =================================
                                            CONFIDENCE
                                        ================================== */}

                                        <div className="intelligence-block">

                                            <span>
                                                CONFIDENCE
                                            </span>

                                            <strong>

                                                {message.confidence ||
                                                    "Medium"}

                                            </strong>

                                        </div>


                                    </div>

                                )}


                            {/* =================================
                                SOURCES
                            ================================== */}

                            {message.sources &&
                                message.sources.length > 0 && (

                                    <div className="sources">

                                        <div className="sources-title">

                                            SOURCES / PROVENANCE

                                        </div>


                                        {message.sources.map(
                                            (source, sourceIndex) => (

                                                <a
                                                    key={sourceIndex}
                                                    href={source.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="source"
                                                >

                                                    <span>
                                                        {sourceIndex + 1}
                                                    </span>

                                                    <strong>
                                                        {source.title}
                                                    </strong>

                                                    <small>
                                                        ↗
                                                    </small>

                                                </a>

                                            )
                                        )}

                                    </div>

                                )}


                            {message.provenance && (

                                <div className="provenance">

                                    <span>
                                        PROVENANCE
                                    </span>

                                    <strong>
                                        {message.provenance.provider}
                                    </strong>

                                    <small>
                                        {message.provenance.status}
                                    </small>

                                </div>

                            )}

                        </div>

                    )
                )}


                {/* =========================================
                    LOADING
                ========================================== */}

                {loading && (

                    <div className="message assistant-message">

                        <div className="message-label">

                            AFRIVERSE AI

                        </div>


                        <div className="processing">

                            <span></span>
                            <span></span>
                            <span></span>

                            <small>
                                Understanding context →
                                retrieving knowledge →
                                generating response
                            </small>

                        </div>

                    </div>

                )}

            </div>


            {/* =========================================
                INPUT
            ========================================== */}

            <form
                className="ask-input"
                onSubmit={handleSubmit}
            >

                <textarea

                    value={question}

                    onChange={(event) =>
                        setQuestion(
                            event.target.value
                        )
                    }

                    placeholder="What would you like to know?"

                    rows={4}

                />


                <div className="input-footer">

                    <span>

                        Nigeria · Northern Nigeria ·
                        English · Agriculture

                    </span>


                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {loading
                            ? "Thinking..."
                            : "Ask AfriVerse →"}

                    </button>

                </div>

            </form>


            <div className="mvp-note">

                AfriVerse MVP · AI responses are
                grounded using available sources.
                Validation status indicates whether
                information has been reviewed through
                the AfriVerse knowledge-validation
                system.

            </div>

        </div>

    );

}
