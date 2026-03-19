// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/about', label: 'What to Expect' },
        { href: '/sermons', label: 'Watch Online' },
        { href: '/events', label: 'Events' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">

            {/* Warm amber glow accent — echoes the hero section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/10 rounded-full filter blur-3xl pointer-events-none" />
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* Brand column */}
                    <div className="space-y-5">
                        {/* Logo mark */}
                        <div className="flex items-center gap-3">
                            <svg
                                className="w-9 h-9 text-amber-400 flex-shrink-0"
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
                                <span className="block text-white font-extrabold text-xl tracking-tight">
                                    CPCM <span className="text-amber-400">Church</span>
                                </span>
                                <span className="text-white/40 text-xs tracking-wide">Cagayan De Oro City</span>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            Spreading the love of Christ to the confined, the broken, and the lost — one life at a time.
                        </p>

                        <p className="text-slate-400 text-sm">
                            3945 San Lucas Street<br />
                            Cagayan De Oro City, Philippines
                        </p>

                        {/* Service times badge */}
                        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                            <span className="text-sm font-medium text-white">Sundays · 9:00 AM - 11:00 AM</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-6">Quick Links</p>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-amber-300 text-sm font-medium transition-colors duration-200"
                                    >
                                        <span className="w-4 h-px bg-slate-700 group-hover:bg-amber-400 group-hover:w-6 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-6">Get in Touch</p>
                        <div className="space-y-4 text-sm text-slate-400">
                            <a
                                href="mailto:charey2005@yahoo.com"
                                className="flex items-center gap-3 hover:text-amber-300 transition-colors duration-200 group"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                charey2005@yahoo.com
                            </a>

                            <a
                                href="tel:+631234567890"
                                className="flex items-center gap-3 hover:text-amber-300 transition-colors duration-200 group"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                +63 123 456 7890
                            </a>

                            <Link
                                href="https://www.facebook.com/cpcmInc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 hover:text-amber-300 transition-colors duration-200 group"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-200">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                CPCM Inc. on Facebook
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
                    <p>&copy; {currentYear} CPCM Church. All rights reserved.</p>
                    <p className="text-slate-700">Built with faith &amp; purpose.</p>
                </div>
            </div>
        </footer>
    );
}