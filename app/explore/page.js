import Link from "next/link";

export default function ExplorePage() {

    const categories = [
        "Agriculture",
        "Culture",
        "Languages",
        "Education",
        "Business",
        "Health",
        "Technology"
    ];


    return (
        <main className="app-page">

            <div className="app-header">

                <div className="section-label">
                    EXPLORE
                </div>

                <h1>
                    Explore Africa.
                </h1>

                <p>
                    Discover knowledge domains and
                    contextual questions across the continent.
                </p>

            </div>


            <div className="explore-grid">

                {categories.map(
                    (category, index) => (

                        <Link
                            href={`/questions?domain=${encodeURIComponent(category)}`}
                            className="explore-card"
                            key={category}
                        >

                            <span>
                                {String(
                                    index + 1
                                ).padStart(2, "0")}
                            </span>

                            <h2>
                                {category}
                            </h2>

                            <p>
                                Explore knowledge →
                            </p>

                        </Link>

                    )
                )}

            </div>

        </main>
    );
}