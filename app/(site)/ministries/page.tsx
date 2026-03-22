import Link from 'next/link';

export const metadata = {
  title: 'Ministries | CPCM Church',
  description: 'Discover the ministries at CPCM Church and how you can get involved.',
};

export default function MinistriesPage() {
  return (
    <main className="w-full">
      {/* ── HEADER ── */}
      <section className="relative w-full py-32 flex flex-col justify-center items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold tracking-widest uppercase border border-amber-400/30 backdrop-blur-sm">
            Serve & Grow
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Our <span className="text-amber-400">Ministries</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            [Brief intro about how ministries operate in the church. Please replace this placeholder text with your content.]
          </p>
        </div>
      </section>

      {/* ── MINISTRIES GRID ── */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Confined Ministry',
                desc: '[Description for Confined Ministry here. E.g. Outreach to local prisons and detention centers.]',
                icon: 'M4 6h16M4 12h16m-7 6h7' 
              },
              {
                title: 'Youth Ministry',
                desc: '[Description for Youth Ministry here. E.g. Engaging the next generation with Christ.]',
                icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422M12 21v-7'
              },
              {
                title: 'Worship Team',
                desc: '[Description for Worship Team here. E.g. Leading the congregation in passionate praise.]',
                icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
              },
              {
                title: 'Kids Ministry',
                desc: '[Description for Kids Ministry here. E.g. Safe, fun, and educational environments for children.]',
                icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Life Groups',
                desc: '[Description for Life Groups here. E.g. Small gatherings for deep community and study.]',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
              },
              {
                title: 'Prayer Warriors',
                desc: '[Description for Prayer Ministry here. E.g. Dedicated intercession for our church and city.]',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              }
            ].map((min) => (
              <div key={min.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={min.icon} />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{min.title}</h2>
                <p className="text-slate-500 flex-grow">{min.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="bg-amber-500 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Want to get involved?</h2>
          <p className="text-amber-100 text-lg">
            There is a place for you to serve and make a difference.
          </p>
          <div className="pt-4">
            <Link href="/partner" className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-md">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
