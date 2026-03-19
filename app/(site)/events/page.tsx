import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Metadata } from 'next';
import FacebookEmbedWrapper from '@/components/FacebookEmbedWrapper';

export const metadata: Metadata = {
  title: 'Events | CPCM Church',
  description: 'Join us for upcoming events, gatherings, and community activities.',
};

interface ChurchEvent {
  _id: string;
  title: string;
  date: string;
  location?: string;
  category?: string;
  image?: any;
  description?: string;
  registrationLink?: string;
  facebookPostUrl?: string;
}

export const revalidate = 60;

export default async function EventsPage() {
  const query = `*[_type == "event" && date >= now()] | order(date asc)`;
  const allEvents = await client.fetch<ChurchEvent[]>(query);
  const events =
    allEvents.length > 0
      ? allEvents
      : await client.fetch<ChurchEvent[]>(`*[_type == "event"] | order(date desc)`);

  return (
    <main className="w-full">

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center overflow-hidden">

        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920&auto=format&fit=crop"
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
            Get Involved
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Upcoming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-red-400">
              Events
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Connect with our community, grow in your faith, and find your place to serve.
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
            <h2 className="text-2xl md:text-3xl font-bold">Something for Everyone</h2>
            <p className="text-white/80 mt-1">From worship nights to outreach — there&apos;s always a place for you.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ── EVENTS GRID ── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-bold tracking-widest text-amber-600 uppercase">What&apos;s Coming Up</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">All Events</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          {events.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-700">No Upcoming Events</h3>
              <p className="text-slate-500 mt-2">Check back soon for new gatherings and activities.</p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {events.map((event) => {
                const eventDate = new Date(event.date);
                const isUpcoming = eventDate >= new Date();

                return (
                  <div
                    key={event._id}
                    className="group flex flex-col border border-slate-100 overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-amber-900/10 bg-white transition-all duration-500 hover:-translate-y-2 relative"
                  >
                    {/* Category Badge */}
                    {event.category && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {event.category}
                        </span>
                      </div>
                    )}

                    {/* Image / Facebook Embed */}
                    {event.facebookPostUrl ? (
                      <div className="w-full relative overflow-hidden bg-white border-b border-slate-100">
                        <FacebookEmbedWrapper url={event.facebookPostUrl} />
                        {/* Date badge */}
                        <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white p-2 md:p-3 rounded-xl shadow-lg">
                          <div className="text-center">
                            <span className="block text-xs font-bold uppercase tracking-wider opacity-90">
                              {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                            <span className="block text-xl font-bold leading-none">{eventDate.getDate()}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] w-full relative overflow-hidden rounded-t-2xl">
                        {event.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={urlFor(event.image).width(800).height(600).url()}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col items-center justify-center">
                            <svg className="w-14 h-14 text-amber-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-medium text-amber-400">No Image</span>
                          </div>
                        )}

                        {/* Date badge */}
                        <div className="absolute bottom-0 left-0 bg-amber-500 text-white p-3 md:p-4 rounded-tr-2xl shadow-lg">
                          <div className="text-center">
                            <span className="block text-xs md:text-sm font-bold uppercase tracking-wider opacity-90">
                              {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                            <span className="block text-2xl md:text-3xl font-bold leading-none">{eventDate.getDate()}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="p-8 flex-grow flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                          {event.title}
                        </h3>

                        <div className="space-y-2 text-sm text-slate-500">
                          {/* Time */}
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                          </div>

                          {/* Location */}
                          {event.location && (
                            <div className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                          )}
                        </div>

                        {event.description && (
                          <p className="text-slate-500 leading-relaxed line-clamp-3 text-sm pt-1">
                            {event.description}
                          </p>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 border-t border-slate-100">
                        {event.registrationLink ? (
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 font-semibold py-3 rounded-xl transition-all duration-300"
                          >
                            Register Now
                          </a>
                        ) : isUpcoming ? (
                          <span className="block w-full text-center bg-slate-50 text-slate-500 font-medium py-3 rounded-xl border border-slate-100">
                            No Registration Required
                          </span>
                        ) : (
                          <span className="block w-full text-center bg-slate-50 text-slate-400 font-medium py-3 rounded-xl border border-slate-100">
                            Past Event
                          </span>
                        )}
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
            You Are Welcome <span className="text-amber-400">Here</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            No matter where you&apos;ve been or what you&apos;ve done — there&apos;s a seat for you at CPCM Church.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Connect With Us
          </a>
        </div>
      </section>

    </main>
  );
}
