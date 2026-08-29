import AskInterface from "../../components/AskInterface";

export default function AskPage() {

    return (
        <main className="app-page">

            <div className="app-header">

                <div>

                    <div className="section-label">
                        AFRIVERSE AI
                    </div>

                    <h1>
                        Ask AfriVerse.
                    </h1>

                    <p>
                        Ask practical questions and explore
                        answers through an African-context lens.
                    </p>

                </div>

            </div>


            <AskInterface />

        </main>
    );
}