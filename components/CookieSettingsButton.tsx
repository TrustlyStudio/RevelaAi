'use client';

import React from 'react';
import { openCookieSettings } from './CookieBanner';

export function CookieSettingsButton() {
  return (
    <button 
      onClick={openCookieSettings} 
      className="hover:text-slate-300 transition-colors"
    >
      Cookie-Einstellungen
    </button>
  );
}
