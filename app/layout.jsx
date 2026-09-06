'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { LanguageProvider } from './context/LanguageContext';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handlePageLoad = () => {
        setContentReady(true);
      };

      if (document.readyState === 'complete') {
        setContentReady(true);
      } else {
        window.addEventListener('load', handlePageLoad);
      }

      const minLoadingTime = setTimeout(() => {
        if (contentReady) {
          setLoading(false);
        }
      }, 1500);

      return () => {
        window.removeEventListener('load', handlePageLoad);
        clearTimeout(minLoadingTime);
      };
    }
  }, [contentReady]);

  useEffect(() => {
    if (contentReady) {
      const finalTimer = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => clearTimeout(finalTimer);
    }
  }, [contentReady]);

  return (
    <html className="html">
      <head>
        <title>Portfolio - Alberto Ambriz</title>
        <meta name="description" content="Projects & trayectory of a Software Developer"/>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4100/4100416.png" />
        <link rel="preload" as="style" href="/path-to-your-main-css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          <div 
            style={{ 
              visibility: loading ? 'hidden' : 'visible',
              opacity: loading ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out',
              minHeight: '100vh',
              width: '100%'
            }}
            className="main-content"
          >
            {children}
          </div>
          {loading && <LoadingScreen />}
        </LanguageProvider>
      </body>
    </html>
  );
}