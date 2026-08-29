export default function KnowledgePage() {

    const knowledgeItems = [

        {
            title:
                "Traditional rainfall indicators",
            location:
                "Northern Nigeria",
            domain:
                "Agriculture",
            source:
                "Community contribution",
            validation:
                "Community reviewed",
            confidence:
                "78%"
        },

        {
            title:
                "Indigenous crop preservation practices",
            location:
                "Northern Nigeria",
            domain:
                "Agriculture",
            source:
                "Community + research",
            validation:
                "Pending expert review",
            confidence:
                "71%"
        },

        {
            title:
                "Local language knowledge",
            location:
                "Nigeria",
            domain:
                "Language",
            source:
                "Community contribution",
            validation:
                "Under review",
            confidence:
                "69%"
        }

    ];


    return (
        <main className="app-page">

            <div className="app-header">

                <div className="section-label">
                    KNOWLEDGE ENGINE
                </div>

                <h1>
                    Explore knowledge.
                </h1>

                <p>
                    Discover contextual information,
                    provenance and validation signals.
                </p>

            </div>


            <div className="knowledge-list">

                {knowledgeItems.map(
                    (item, index) => (

                        <article
                            className="knowledge-card"
                            key={index}
                        >

                            <div className="knowledge-number">
                                {String(
                                    index + 1
                                ).padStart(2, "0")}
                            </div>

                            <div>

                                <div className="knowledge-domain">
                                    {item.domain}
                                </div>

                                <h2>
                                    {item.title}
                                </h2>

                                <p>
                                    {item.location}
                                </p>


                                <div className="knowledge-meta">

                                    <span>
                                        SOURCE
                                        <strong>
                                            {item.source}
                                        </strong>
                                    </span>

                                    <span>
                                        VALIDATION
                                        <strong>
                                            {item.validation}
                                        </strong>
                                    </span>

                                    <span>
                                        CONFIDENCE
                                        <strong>
                                            {item.confidence}
                                        </strong>
                                    </span>

                                </div>

                            </div>

                        </article>

                    )
                )}

            </div>

        </main>
    );
}