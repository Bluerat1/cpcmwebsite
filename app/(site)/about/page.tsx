import Link from 'next/link';

export const metadata = {
  title: 'About Us | CPCM Church',
  description: 'Learn about our mission, vision, and the core values that drive CPCM Church in Cagayan De Oro City.',
};

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">

        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1548625361-ecbc7758bc66?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/20 rounded-full filter blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold tracking-widest uppercase border border-amber-400/30 backdrop-blur-sm">
            Our Story
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Who We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
              Are
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            A community of believers passionate about sharing God&apos;s love, building strong families, and serving the confined in Cagayan De Oro City.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── AMBER BANNER ── */}
      <section className="bg-amber-500 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Rooted in Faith, Driven by Love</h2>
            <p className="text-white/80 mt-1">Christian Partnership for the Confined Ministry · Cagayan De Oro City</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-md"
          >
            Connect With Us
          </Link>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Mission &amp; Vision</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-300" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                  <p className="text-slate-500 leading-relaxed">
                    To lead people into a growing relationship with Jesus Christ — creating environments where people are encouraged and equipped to pursue intimacy with God, community with insiders, and influence with outsiders.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-300" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                  <p className="text-slate-500 leading-relaxed">
                    To be a church that unchurched people love to attend — dreaming of a city transformed by the love of Jesus, where every neighborhood experiences the tangible grace and truth of the Gospel through our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Authentic Faith',
                desc: 'A real, living relationship with God that transforms our daily lives.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Deep Community',
                desc: 'We are designed to do life together in grace-filled, authentic relationships.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Radical Love',
                desc: 'We strive to love our neighbors incredibly well, just as Christ first loved us.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.73 0-.71-.71M6.34 6.34l-.71-.71M12 6a6 6 0 100 12A6 6 0 0012 6z" />
                  </svg>
                ),
                title: 'Generous Service',
                desc: 'We are contributors, not consumers — giving our time, talents, and treasure freely.',
              },
            ].map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center group">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">Meet the Team</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Leadership</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { name: 'John Doe', role: 'Lead Pastor', desc: 'Passionate about teaching the Word and leading our community.' },
              { name: 'Jane Smith', role: 'Worship Pastor', desc: 'Leads our congregation in authentic and spirit-led worship.' },
              { name: 'Mark Johnson', role: 'Youth Director', desc: 'Dedicated to raising up the next generation of believers.' },
            ].map((leader) => (
              <div key={leader.name} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:border-amber-200 group-hover:shadow-amber-100 transition-all duration-300 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{leader.name}</h4>
                <p className="text-amber-600 font-semibold text-sm mb-2">{leader.role}</p>
                <p className="text-slate-500 text-sm">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            We&apos;d Love to <span className="text-amber-400">Meet You</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Join us this Sunday. Experience a welcoming community, inspiring worship, and a message full of hope.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

    </main>
  );
}
