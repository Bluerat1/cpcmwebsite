import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CPCM Church | Welcome Home",
  description: "Join us this Sunday in Cagayan De Oro City.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 min-h-screen flex flex-col`}>
        {/* 2. Add the Navbar at the top */}
        <Navbar />

        {/* 3. The 'children' is whatever specific page we are on (Home, About, etc.) */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 4. Add the Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
