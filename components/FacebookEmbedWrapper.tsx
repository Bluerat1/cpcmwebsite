"use client";

import { useState, useEffect } from 'react';
import { FacebookEmbed } from 'react-social-media-embed';

export default function FacebookEmbedWrapper({ url }: { url: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full bg-slate-50 py-4 min-h-[300px]" />;
  }

  return (
    <div className="w-full flex justify-center items-center bg-slate-50 py-4 min-h-[300px]">
      <FacebookEmbed url={url} width="100%" style={{ maxWidth: '450px' }} />
    </div>
  );
}
