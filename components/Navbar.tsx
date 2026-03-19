'use client';

// components/Navbar.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/sermons', label: 'Sermons' },
        { href: '/events', label: 'Events' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                        {/* Three Crosses SVG */}
                        <svg
                            className="w-9 h-9 text-amber-400 flex-shrink-0 drop-shadow-md"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <rect x="6" y="16" width="3" height="18" rx="1.5" />
                            <rect x="2" y="20" width="11" height="3" rx="1.5" />
                            <rect x="22.5" y="10" width="3" height="22" rx="1.5" />
                            <rect x="17" y="15" width="14" height="3" rx="1.5" />
                            <rect x="39" y="16" width="3" height="18" rx="1.5" />
                            <rect x="35" y="20" width="11" height="3" rx="1.5" />
                        </svg>
                        <div className="leading-tight">
                            <span className="block text-white font-extrabold text-lg tracking-tight group-hover:text-amber-300 transition-colors duration-300">
                                Christian Partnership for the Confined Ministry Inc. <span className="text-amber-400">Church</span>
                            </span>
                            <span className="hidden sm:block text-white/50 text-xs tracking-wide">
                                Cagayan De Oro City
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/80 hover:text-amber-300 font-medium text-sm tracking-wide transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/give"
                            className="ml-2 bg-amber-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Give
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        className="md:hidden text-white/80 hover:text-amber-300 transition-colors p-2 rounded-lg"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } bg-slate-950/98 backdrop-blur-md border-t border-white/5`}
            >
                <div className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl text-white/80 hover:text-amber-300 hover:bg-white/5 font-medium text-sm tracking-wide transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2 pb-1">
                        <Link
                            href="/give"
                            onClick={() => setMenuOpen(false)}
                            className="block text-center bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-400 transition-all duration-300"
                        >
                            Give
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}