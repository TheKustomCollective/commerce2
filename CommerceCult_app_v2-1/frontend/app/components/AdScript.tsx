'use client';

import Script from 'next/script';

export default function AdScript() {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  
  if (!adsenseId || adsenseId === 'ca-pub-XXXXXXXXXXXXXXXX') {
    return null; // Don't load script if ID not configured
  }

  return (
    <>
      {/* Google AdSense */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
