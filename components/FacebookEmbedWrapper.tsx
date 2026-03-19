"use client";

import { FacebookEmbed } from 'react-social-media-embed';

export default function FacebookEmbedWrapper({ url }: { url: string }) {
  return (
    <div className="w-full flex justify-center items-center bg-slate-50 py-4 min-h-[300px]">
      <FacebookEmbed url={url} width="100%" style={{ maxWidth: '450px' }} />
    </div>
  );
}
