import "./globals.css";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";

export const metadata = {
    title: "AfriVerse AI",
    description:
        "The knowledge layer for Africa-native AI."
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">

            <body>

                <Header />

                <div className="page">
                    {children}
                </div>

                <MobileNav />

            </body>

        </html>
    );
}