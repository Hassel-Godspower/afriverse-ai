"use client";

import { useState } from "react";

export default function AskInterface() {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);


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
                content: userQuestion
            }
        ]);

        setLoading(true);


        try {

            const response = await fetch("/api/ask", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: userQuestion
                })

            });


            const data = await response.json();


            setMessages((previous) => [
                ...previous,
                {
                    role: "assistant",
                    content: data.answer,
                    context: data.context,
                    confidence: data.confidence
                }
            ]);

        } catch (error) {

            setMessages((previous) => [
                ...previous,
                {
                    role: "assistant",
                    content:
                        "AfriVerse could not process the request."
                }
            ]);

        } finally {

            setLoading(false);

        }
    }


    function handleSubmit(event) {

        event.preventDefault();

        askQuestion();

    }


    return (
        <div className="ask-interface">

            <div className="chat-area">

                {messages.length === 0 && (

                    <div className="welcome">

                        <div className="welcome-mark">
                            AV
                        </div>

                        <h2>
                            Ask AfriVerse.
                        </h2>

                        <p>
                            Ask a question and explore how
                            AfriVerse could combine AI with
                            African context.
                        </p>

                        <div className="suggestions">

                            <button
                                onClick={() =>
                                    setQuestion(
                                        "What traditional farming practices are used in northern Nigeria?"
                                    )
                                }
                            >
                                Traditional farming in northern Nigeria
                            </button>

                            <button
                                onClick={() =>
                                    setQuestion(
                                        "What languages are commonly spoken in Lagos?"
                                    )
                                }
                            >
                                Languages spoken in Lagos
                            </button>

                            <button
                                onClick={() =>
                                    setQuestion(
                                        "How do African communities preserve indigenous knowledge?"
                                    )
                                }
                            >
                                Indigenous knowledge preservation
                            </button>

                        </div>

                    </div>

                )}


                {messages.map((message, index) => (

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


                        {message.role === "assistant" &&
                            message.context && (

                                <div className="answer-metadata">

                                    <div>
                                        <small>
                                            CONTEXT
                                        </small>

                                        <strong>
                                            {message.context}
                                        </strong>
                                    </div>


                                    <div>
                                        <small>
                                            CONFIDENCE
                                        </small>

                                        <strong>
                                            {message.confidence}%
                                        </strong>
                                    </div>

                                </div>

                            )}

                    </div>

                ))}


                {loading && (

                    <div className="message assistant-message">

                        <div className="message-label">
                            AFRIVERSE AI
                        </div>

                        <div className="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                )}

            </div>


            <form
                className="ask-input"
                onSubmit={handleSubmit}
            >

                <textarea
                    value={question}
                    onChange={(event) =>
                        setQuestion(event.target.value)
                    }
                    placeholder="Ask anything about Africa..."
                    rows={3}
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Thinking..."
                        : "Ask AfriVerse →"}
                </button>

            </form>

        </div>
    );
}