import { client } from '@/sanity/lib/client'

interface Sermon {
  _id: string;
  title: string;
  speaker: string;
  date: string;
  summary?: string;
  videoUrl?: string;
}

export const revalidate = 60;

// 1. The Helper Function: This magically turns a standard YouTube link into an Embed link
function getYouTubeEmbedUrl(url: string) {
  if (!url) return null;
  // This looks for the unique 11-character video ID in any YouTube link
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
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Recent Messages</h1>

      <div className="grid gap-8">
        {sermons.map((sermon) => {
          // 2. Convert the URL for each sermon before we display it
          const embedUrl = sermon.videoUrl ? getYouTubeEmbedUrl(sermon.videoUrl) : null;

          return (
            <div key={sermon._id} className="border border-slate-200 overflow-hidden rounded-xl shadow-sm bg-white">

              {/* 3. The Video Player (Only shows if there is a valid YouTube link) */}
              {embedUrl && (
                <div className="aspect-video w-full bg-slate-900">
                  <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800">{sermon.title}</h2>
                <p className="text-slate-500 mt-1">
                  By {sermon.speaker} • {new Date(sermon.date).toLocaleDateString()}
                </p>

                {sermon.summary && (
                  <p className="mt-4 text-slate-600 leading-relaxed">{sermon.summary}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}