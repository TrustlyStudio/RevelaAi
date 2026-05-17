'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { COOKIE_CONSENT_KEY, ConsentSettings } from './CookieBanner';

// TODO: Replace with your actual IDs
const GA_MEASUREMENT_ID = ''; // e.g. G-XXXXXXXXXX
const META_PIXEL_ID = ''; // e.g. 1234567890

export function CookieScripts() {
  const [consent, setConsent] = useState<ConsentSettings | null>(null);

  useEffect(() => {
    // Initial check
    const checkConsent = () => {
      try {
        const data = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (data) setConsent(JSON.parse(data));
      } catch (e) {}
    };
    checkConsent();

    // Listen to updates
    const handleUpdate = (e: CustomEvent<ConsentSettings>) => {
      setConsent(e.detail);
    };
    window.addEventListener('cookieConsentUpdated', handleUpdate as EventListener);
    
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleUpdate as EventListener);
    };
  }, []);

  if (!consent) return null;

  return (
    <>
      {consent.analytics && GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {consent.marketing && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
