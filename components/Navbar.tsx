// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                            Grace<span className="text-blue-600">Church</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</Link>
                        <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About</Link>
                        <Link href="/sermons" className="text-slate-600 hover:text-blue-600 font-medium transition">Sermons</Link>
                        <Link href="/events" className="text-slate-600 hover:text-blue-600 font-medium transition">Events</Link>

                        {/* Give Button */}
                        <Link
                            href="/give"
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm"
                        >
                            Give
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}