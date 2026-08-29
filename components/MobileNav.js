"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {

    const pathname = usePathname();

    const items = [
        {
            href: "/",
            icon: "⌂",
            label: "Home"
        },
        {
            href: "/ask",
            icon: "✦",
            label: "Ask"
        },
        {
            href: "/explore",
            icon: "⌕",
            label: "Explore"
        },
        {
            href: "/questions",
            icon: "?",
            label: "Contribute"
        },
        {
            href: "/knowledge",
            icon: "◇",
            label: "Knowledge"
        }
    ];

    return (
        <nav className="mobile-nav">

            {items.map((item) => (

                <Link
                    key={item.href}
                    href={item.href}
                    className={
                        pathname === item.href
                            ? "mobile-nav-item active"
                            : "mobile-nav-item"
                    }
                >

                    <span>
                        {item.icon}
                    </span>

                    <small>
                        {item.label}
                    </small>

                </Link>

            ))}

        </nav>
    );
}