'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Función para verificar cuando el DOM y recursos estén listos
      const handlePageLoad = () => {
        setContentReady(true);
      };

      // Si la página ya está cargada
      if (document.readyState === 'complete') {
        setContentReady(true);
      } else {
        // Escuchar cuando termine de cargar
        window.addEventListener('load', handlePageLoad);
      }

      // Timer mínimo para mostrar la animación
      const minLoadingTime = setTimeout(() => {
        if (contentReady) {
          setLoading(false);
        }
      }, 1500);

      // Cleanup
      return () => {
        window.removeEventListener('load', handlePageLoad);
        clearTimeout(minLoadingTime);
      };
    }
  }, [contentReady]);

  // Effect separado para manejar cuando el contenido esté listo
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
        {/* Preload crítico */}
        <link rel="preload" as="style" href="/path-to-your-main-css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Usar visibility en lugar de display para mantener el DOM activo */}
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
      </body>
    </html>
  );
}