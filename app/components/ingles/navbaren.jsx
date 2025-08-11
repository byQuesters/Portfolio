'use client';
/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';
import { useState, useEffect } from 'react';
/* IMPORT CSS */
import "../../css/navbar.css"
/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavbarEN() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 100;
      
      if (shouldBeScrolled !== isScrolled && !isTransitioning) {
        setIsTransitioning(true);
        
        // Iniciar fade out
        setTimeout(() => {
          setIsScrolled(shouldBeScrolled);
          
          // Completar fade in
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300); // Duración del fade in
        }, 300); // Duración del fade out
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, isTransitioning]);

  // Determinar las clases CSS
  const getNavbarClasses = () => {
    let classes = 'navbar';
    
    if (isScrolled) {
      classes += ' navbar-header';
    }
    
    if (isTransitioning) {
      classes += ' navbar-fade-out';
    } else {
      classes += ' navbar-fade-in';
    }
    
    return classes;
  };

  return (
    <div className={getNavbarClasses()}>
      <div className="logo">
        <Link className="link" href="/">Al</Link>
      </div>
      <div className="access">
        <a className="link" href="#"><i className="bi bi-house-fill"></i><span>Home</span></a>
        <a className="link" href="./PersonalEN"><i className="bi bi-person-raised-hand"></i><span>Solo</span></a>
        <a className="link" href="./GrupalEN"><i className="bi bi-people-fill"></i><span>In Group</span></a>
      </div>
    </div>
  );
}