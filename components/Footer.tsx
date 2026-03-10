// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Church Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4"> CPCM Church</h3>
                    <p className="mb-2">123 Faith Avenue<br />Cagayan De Oro City, Philippines</p>
                    <p>Sundays at 9:00 AM & 11:00 AM</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-white transition">What to Expect</Link></li>
                        <li><Link href="/sermons" className="hover:text-white transition">Watch Online</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
                    <p>Email: hello@cpcmchurch.local</p>
                    <p>Phone: +63 123 456 7890</p>
                </div>

            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
                <p>&copy; {currentYear} CPCM Church. All rights reserved.</p>
            </div>
        </footer>
    );
}