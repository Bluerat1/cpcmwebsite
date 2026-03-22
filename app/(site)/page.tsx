import { client } from '@/sanity/lib/client'
import Link from 'next/link'

interface Sermon {
  _id: string;
  title: string;
  speaker: string;
  date: string;
  summary?: string;
  videoUrl?: string;
}

export const revalidate = 60;

function getYouTubeEmbedUrl(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return null;
}

export default async function HomePage() {
  const sermons = await client.fetch<Sermon[]>(`*[_type == "sermon"] | order(date desc)`);

  return (
    <main className="w-full">

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Warm dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        {/* Subtle warm amber glow from center-bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/20 rounded-full filter blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold tracking-widest uppercase border border-amber-400/30 backdrop-blur-sm">
            Glorify Christ, Make Disciples
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Christian Partnership
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
              for the Confined Ministry
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Spreading the love of Christ to the confined, the broken, and the lost — in Cagayan De Oro City.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/about"
              className="bg-amber-500 text-white px-9 py-4 rounded-full font-bold text-base hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Plan a Visit
            </Link>
            <Link
              href="#messages"
              className="bg-white/10 text-white border border-white/30 px-9 py-4 rounded-full font-bold text-base hover:bg-white/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300"
            >
              Watch Sermons
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SCHEDULES ── */}
      <section className="bg-amber-500 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-900 uppercase">Service Schedules</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Join Us Every Week</h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto rounded-full" />
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-amber-900 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sunday Service</h3>
              <p className="text-amber-100 text-lg mb-2 font-medium">9:00 AM &amp; 11:00 AM</p>
              <p className="text-sm text-amber-50 mt-4 leading-relaxed">Main Worship Service<br/>in Cagayan De Oro City</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Midweek Ministry</h3>
              <p className="text-amber-100 text-lg mb-2 font-medium">[Time Placeholder]</p>
              <p className="text-sm text-amber-50 mt-4 leading-relaxed">Midweek Service &amp; Prayer<br/>(Please replace placeholder)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white shadow-lg hover:-translate-y-2 transition-transform duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Youth Gathering</h3>
              <p className="text-amber-100 text-lg mb-2 font-medium">[Time Placeholder]</p>
              <p className="text-sm text-amber-50 mt-4 leading-relaxed">Youth Ministry Fellowship<br/>(Please replace placeholder)</p>
            </div>
          </div>
          
          <div className="pt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Directions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION CARDS ── */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">Our Heart</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Built on Faith, Hope &amp; Love</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                ),
                title: "Love the Confined",
                desc: "We bring God's word and compassion inside prisons and detention centers across CDO.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                ),
                title: "Community First",
                desc: "A warm family of believers who walk together in faith, discipleship, and fellowship.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                ),
                title: "Living the Word",
                desc: "Every Sunday we dig deep into Scripture with messages that transform everyday life.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center group">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT SERMONS ── */}
      <section id="messages" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">Stay in the Loop</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Recent Updates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          {/* Facebook Page Plugin Embed */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FcpcmInc&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="700"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <a
              href="https://www.facebook.com/cpcminc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-3 rounded-full font-bold hover:bg-[#166fe5] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="relative py-28 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            You Are Welcome <span className="text-amber-400">Here</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            No matter where you've been or what you've done — there's a seat for you at CPCM Church.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Connect With Us
          </Link>
        </div>
      </section>

    </main>
  );
}