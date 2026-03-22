import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | CPCM Church',
  description: 'Get in touch with CPCM Church in Cagayan De Oro City. Find our location, service times, and contact information.',
};

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* ── HEADER ── */}
      <section className="relative w-full py-32 flex flex-col justify-center items-center overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold tracking-widest uppercase border border-amber-400/30 backdrop-blur-sm">
            We&apos;re Here For You
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you have a question, need prayer, or want to visit, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO & MAP ── */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                We&apos;re so glad you&apos;re interested in connecting with CPCM Church. Feel free to reach out using any of the methods below.
              </p>
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 border border-amber-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-slate-400">3945 San Lucas Street<br />Cagayan De Oro City, Philippines</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 border border-orange-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a href="mailto:charey2005@yahoo.com" className="text-slate-400 hover:text-amber-400 transition-colors">charey2005@yahoo.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 border border-emerald-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a href="tel:+631234567890" className="text-slate-400 hover:text-amber-400 transition-colors">+63 123 456 7890</a>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <div className="pt-6 border-t border-white/10">
              <Link
                href="https://www.facebook.com/cpcmInc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1877F2]/10 text-[#1877F2] px-6 py-3 rounded-xl font-semibold hover:bg-[#1877F2] hover:text-white transition-all duration-300 border border-[#1877F2]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Message us on Facebook
              </Link>
            </div>
          </div>

          {/* Contact Message */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col justify-center items-center text-center space-y-6">
             <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
             </div>
             <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
             <p className="text-slate-400">
               For the quickest response, please reach out directly through our Facebook page or via email! Our team monitors it constantly and we will get back to you soon.
             </p>
             <Link
                href="https://www.facebook.com/cpcmInc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
             >
               Visit our Facebook
             </Link>
          </div>
          
        </div>
      </section>
    </main>
  );
}
