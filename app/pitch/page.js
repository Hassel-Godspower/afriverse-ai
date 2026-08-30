"use client";

export default function PitchPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#050807",
                color: "#ffffff",
                padding: "40px 20px",
                fontFamily:
                    "Inter, Arial, Helvetica, sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >

                {/* HEADER */}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "30px",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}
                >

                    <div>
                        <div
                            style={{
                                fontSize: "12px",
                                letterSpacing: "3px",
                                color: "#b89b5e",
                                marginBottom: "8px",
                            }}
                        >
                            AFRIVERSE
                        </div>

                        <h1
                            style={{
                                margin: 0,
                                fontSize: "32px",
                                fontWeight: 600,
                            }}
                        >
                            Google AI Lab Pitch Deck
                        </h1>
                    </div>


                    <a
                        href="/"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            border: "1px solid #333",
                            padding: "12px 18px",
                            borderRadius: "8px",
                            fontSize: "14px",
                        }}
                    >
                        ← Back to AfriVerse
                    </a>

                </div>


                {/* DESCRIPTION */}

                <div
                    style={{
                        marginBottom: "24px",
                        maxWidth: "750px",
                        color: "#a7ada9",
                        lineHeight: 1.7,
                    }}
                >
                    AfriVerse is building a participatory knowledge
                    platform designed to help capture, validate and
                    structure African contextual knowledge for the
                    next generation of AI.
                </div>


                {/* PDF VIEWER */}

                <div
                    style={{
                        width: "100%",
                        height: "80vh",
                        minHeight: "650px",
                        background: "#111513",
                        border: "1px solid #252a27",
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                >

                    <iframe
                        src="/AfriVerse-Google-Africa-AI-Lab-Pitch.pdf"
                        title="AfriVerse Google AI Lab Pitch Deck"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />

                </div>


                {/* DOWNLOAD */}

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "24px",
                    }}
                >

                    <a
                        href="/AfriVerse-Google-Africa-AI-Lab-Pitch.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            background: "#b89b5e",
                            color: "#050807",
                            padding: "14px 24px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        Open Pitch Deck ↗
                    </a>

                </div>

            </div>
        </main>
    );
}