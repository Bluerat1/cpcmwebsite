import { client } from '@/sanity/lib/client'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sermons | CPCM Church',
  description: 'Watch or listen to our latest sermons and messages from CPCM Church.',
};

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

export default async function SermonsPage() {
  const sermons = await client.fetch<Sermon[]>(`*[_type == "sermon"] | order(date desc)`);

  return (
    <main className="w-full">

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center overflow-hidden">

        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1920&auto=format&fit=crop"
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
            Messages
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Sermon{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
              Archive
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Catch up on past messages, or re-watch your favorites. Be encouraged and transformed by the Word.
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
            <h2 className="text-2xl md:text-3xl font-bold">Every Word, Every Week</h2>
            <p className="text-white/80 mt-1">Dive deeper into God&apos;s Word — messages that transform everyday life.</p>
          </div>
          <a
            href="https://www.youtube.com/@cpcminc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-md"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* ── SERMONS GRID ── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">All Messages</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Watch &amp; Listen</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          {sermons.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 10.5v3m-3.536-5.036a5 5 0 000 7.072M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-700">No Sermons Yet</h3>
              <p className="text-slate-500 mt-2">Check back soon — new messages are on the way!</p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {sermons.map((sermon) => {
                const embedUrl = sermon.videoUrl ? getYouTubeEmbedUrl(sermon.videoUrl) : null;
                return (
                  <div
                    key={sermon._id}
                    className="group flex flex-col border border-slate-100 overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-amber-900/10 bg-white transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Video / Placeholder */}
                    {embedUrl ? (
                      <div className="aspect-video w-full bg-slate-950 relative overflow-hidden rounded-t-2xl">
                        <iframe
                          className="w-full h-full absolute inset-0 z-10"
                          src={embedUrl}
                          title={sermon.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center rounded-t-2xl gap-2">
                        <svg className="w-14 h-14 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.536 8.464a5 5 0 010 7.072M12 10.5v3m-3.536-5.036a5 5 0 000 7.072M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-amber-400">Audio Only</span>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="p-8 flex-grow flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                          <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full">{sermon.speaker}</span>
                          <span>·</span>
                          <time dateTime={sermon.date}>
                            {new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </time>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                          {sermon.title}
                        </h3>
                        {sermon.summary && (
                          <p className="text-slate-500 leading-relaxed line-clamp-3 text-sm md:text-base">
                            {sermon.summary}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <button className="text-amber-600 font-semibold flex items-center justify-between w-full group-hover:gap-3 transition-all">
                          <span>Watch Message</span>
                          <span className="text-xl leading-none group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
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
            Join Us <span className="text-amber-400">This Sunday</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Experience these messages live — 9:00 AM &amp; 11:00 AM at 3945 San Lucas Street, Cagayan De Oro City.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Plan a Visit
          </a>
        </div>
      </section>

    </main>
  );
}
