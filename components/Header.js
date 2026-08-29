"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">

            <div className="header-inner">

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>


                <Link
                    href="/"
                    className="logo"
                >

                    <span className="logo-mark">
                        AV
                    </span>

                    <span>
                        AfriVerse
                    </span>

                </Link>


                <nav
                    className={
                        menuOpen
                            ? "desktop-nav open"
                            : "desktop-nav"
                    }
                >

                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/ask">
                        Ask
                    </Link>

                    <Link href="/explore">
                        Explore
                    </Link>

                    <Link href="/questions">
                        Questions
                    </Link>

                    <Link href="/knowledge">
                        Knowledge
                    </Link>

                </nav>


                <div className="header-actions">

                    <button className="theme-button">
                        ◐
                    </button>

                    <div className="avatar">
                        AV
                    </div>

                </div>

            </div>

        </header>
    );
}