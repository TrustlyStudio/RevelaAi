'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export function ThirdPartyScripts() {
  const pathname = usePathname();
  
  const excludedPaths = ['/impressum', '/datenschutz', '/agb', '/avv'];
  
  if (excludedPaths.includes(pathname || '')) {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-DB1KQFWNJV';
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || '6LfUYPIsAAAAAAegUgyhu9IE8BGSLhpFRE8JAGwz';

  return (
    <>
      {/* Google Analytics 4 */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Google reCAPTCHA v3 */}
      <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`} strategy="afterInteractive" />
    </>
  );
}
