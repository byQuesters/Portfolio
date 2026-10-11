'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// URL de tu API
const API_URL = 'https://playing-api-tan.vercel.app/api';

// Refrescar cada 30s
const INTERVALO_POLL = 30000;

export default function NowPlayingHover({ children }) {
  const [datos, setDatos] = useState(null);
  const [hover, setHover] = useState(false);
  const [sonando, setSonando] = useState(false);
  const hoverTimer = useRef(null);

  // Traer datos y calcular si hay música sonando
  const obtenerDatos = useCallback(async () => {
    try {
      const res = await fetch(API_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('Error en la API');
      const data = await res.json();
      setDatos(data);

      const m = data?.music;
      setSonando(!!m && (m.state === 'playing' || m.state === 'paused'));
    } catch (error) {
      console.error('Error al obtener datos:', error);
      setDatos(null);
      setSonando(false);
    }
  }, []);

  // Fetch
  useEffect(() => {
    obtenerDatos();
    const id = setInterval(obtenerDatos, INTERVALO_POLL);
    return () => clearInterval(id);
  }, [obtenerDatos]);

  // Hover
  const alEntrar = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setHover(true);
      obtenerDatos(); // refresca al pasar el mouse
    }, 150);
  };

  const alSalir = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHover(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  // Contenido del tooltip
  const renderTooltip = () => {
    const m = datos?.music;

    if (!m || (!m.track && m.state !== 'playing' && m.state !== 'paused')) {
      return <div className="tooltip-vacio">No hay música reproduciéndose</div>;
    }

    return (
      <div className="tooltip-contenido">
        <div className="tooltip-pista">{m.track || '—'}</div>
        <div className="tooltip-artista">{m.artist || '—'}</div>
        <div className="tooltip-album">{m.album || '—'}</div>
        <div className="tooltip-estado">
          {m.state === 'playing' ? '▶ Escuchando' : '⏸ Pausado'}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`now-playing-wrapper${sonando ? ' esta-sonando' : ''}`}
      onMouseEnter={alEntrar}
      onMouseLeave={alSalir}
    >
      {children}
      {hover && <div className="tooltip-flotante">{renderTooltip()}</div>}
    </div>
  );
}