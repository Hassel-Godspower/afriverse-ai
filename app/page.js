import Link from "next/link";

export default function Home() {
    return (
        <main>

            <section className="hero">

                <div className="hero-content">

                    <div className="eyebrow">
                        AFRIVERSE AI
                    </div>

                    <h1>
                        Intelligence needs
                        <span> context.</span>
                    </h1>

                    <p>
                        AfriVerse is building a participatory knowledge
                        platform that helps structure African knowledge,
                        languages and lived experience for intelligent
                        applications.
                    </p>

                    <div className="hero-actions">

                        <Link
                            href="/ask"
                            className="btn btn-primary"
                        >
                            ✦ Ask AfriVerse
                        </Link>

                        <Link
                            href="/questions"
                            className="btn btn-secondary"
                        >
                            Generate Questions →
                        </Link>

                    </div>

                </div>


                <div className="hero-visual">

                    <div className="ai-orb">

                        <div className="orb-ring ring-one"></div>
                        <div className="orb-ring ring-two"></div>
                        <div className="orb-ring ring-three"></div>

                        <div className="orb-core">
                            AV
                        </div>

                    </div>

                </div>

            </section>


            <section className="section">

                <div className="section-label">
                    THE AFRIVERSE LOOP
                </div>

                <h2>
                    Ask. Contribute.
                    <span> Validate. Learn.</span>
                </h2>

                <p className="section-intro">
                    AfriVerse connects questions, human knowledge,
                    contextual data and AI into a continuous
                    knowledge-generation cycle.
                </p>


                <div className="feature-grid">

                    <Link
                        href="/ask"
                        className="feature-card"
                    >
                        <span>01</span>

                        <h3>
                            Ask
                        </h3>

                        <p>
                            Ask practical questions and receive
                            context-aware answers.
                        </p>

                        <strong>
                            Open AI →
                        </strong>
                    </Link>


                    <Link
                        href="/questions"
                        className="feature-card"
                    >
                        <span>02</span>

                        <h3>
                            Generate
                        </h3>

                        <p>
                            Discover questions that can expose
                            local knowledge and knowledge gaps.
                        </p>

                        <strong>
                            Generate questions →
                        </strong>
                    </Link>


                    <Link
                        href="/knowledge"
                        className="feature-card"
                    >
                        <span>03</span>

                        <h3>
                            Knowledge
                        </h3>

                        <p>
                            Explore context, provenance and
                            validation.
                        </p>

                        <strong>
                            Explore knowledge →
                        </strong>
                    </Link>

                </div>

            </section>


            <section className="section dark-section">

                <div className="section-label">
                    THE VISION
                </div>

                <h2>
                    Africa shouldn't only
                    <span> consume AI.</span>
                </h2>

                <p className="section-intro">
                    Africa should help build the knowledge systems
                    that intelligent applications learn from.
                </p>

                <Link
                    href="/explore"
                    className="btn btn-primary"
                >
                    Explore AfriVerse →
                </Link>

            </section>

        </main>
    );
}