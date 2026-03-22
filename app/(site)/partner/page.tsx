import Link from 'next/link';

export const metadata = {
  title: 'Partner With Us | CPCM Church',
  description: 'Learn how to partner with CPCM Church through Prayer, Volunteering, and Giving.',
};

export default function PartnerPage() {
  return (
    <main className="w-full">
      {/* ── HEADER ── */}
      <section className="relative w-full py-32 flex flex-col justify-center items-center overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113565694-c6c728e28ee9?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold tracking-widest uppercase border border-amber-400/30 backdrop-blur-sm">
            Make A Difference
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            God works through the generous partnership of His people. Discover how you can join us through prayer, service, and giving.
          </p>
        </div>
      </section>

      {/* ── WAYS TO PARTNER ── */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* PRAYER */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Prayer</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                [Add text about how important prayer is and how they can submit prayer requests or join the prayer warriors meeting.]
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                Submit a Prayer Request <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="flex-1 w-full bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl hover:border-white/10 transition-colors">
               <h3 className="text-white text-xl font-semibold mb-4">Current Prayer Focus</h3>
               <ul className="space-y-4 text-slate-400 border-l-2 border-amber-500/30 pl-4">
                 <li className="flex flex-col">
                   <span className="text-amber-400 text-sm font-semibold mb-1">Confined Ministry</span>
                   <p className="text-sm">[Placeholder for current prayer points - e.g. our confined ministry outreach, safety of volunteers]</p>
                 </li>
                 <li className="flex flex-col">
                   <span className="text-amber-400 text-sm font-semibold mb-1">City Leaders</span>
                   <p className="text-sm">[Placeholder for current prayer points - e.g. wisdom for local government]</p>
                 </li>
               </ul>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* VOLUNTEER */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Volunteer</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                [Add text explaining volunteer opportunities. How can individuals use their talents to serve the church community?]
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                Sign Up to Serve <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="flex-1 w-full bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl hover:border-white/10 transition-colors">
              <h3 className="text-white text-xl font-semibold mb-4">Areas to Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="block text-slate-300 font-medium mb-1">Ushering</span>
                  <span className="text-xs text-slate-500 block leading-tight">[Info needed]</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="block text-slate-300 font-medium mb-1">Kids Min</span>
                  <span className="text-xs text-slate-500 block leading-tight">[Info needed]</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="block text-slate-300 font-medium mb-1">Tech / Media</span>
                  <span className="text-xs text-slate-500 block leading-tight">[Info needed]</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="block text-slate-300 font-medium mb-1">Worship</span>
                  <span className="text-xs text-slate-500 block leading-tight">[Info needed]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* GIVING */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Giving</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                [Add text about tithes and offerings. Support the ministry's mission through financial partnership.]
              </p>
              <div className="pt-2">
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all hover:scale-105 shadow-lg shadow-emerald-500/20">
                  Give Online
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl hover:border-white/10 transition-colors">
              <h3 className="text-white text-xl font-semibold mb-6">Other Ways to Give</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Bank Transfer</h4>
                    <p className="text-sm text-slate-500 mt-1">[Bank Details Placeholder]</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GCash / Mobile</h4>
                    <p className="text-sm text-slate-500 mt-1">[GCash/Mobile Details Placeholder]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
