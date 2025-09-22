import React, { useEffect, useState } from 'react';
import Spinner from './spinner';

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  // Effect para manejar la transición de salida
  useEffect(() => {
    // Preparar para el fade out cuando el componente esté por desmontarse
    const handleBeforeUnmount = () => {
      setFadeOut(true);
    };

    return handleBeforeUnmount;
  }, []);

  return (
    <div 
      className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingScreen;