'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import "../css/navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cvFile = language === 'es' ? './CVES.pdf' : './CVEN.pdf';
  const cvName = language === 'es' 
    ? 'CV ESPAÑOL 2026 - Alberto Ambriz.pdf' 
    : 'CV ENGLISH 2026 - Alberto Ambriz.pdf';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 100;
      
      if (shouldBeScrolled !== isScrolled && !isTransitioning) {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setIsScrolled(shouldBeScrolled);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, isTransitioning]);

  const getNavbarClasses = () => {
    let classes = 'navbar';
    if (isScrolled) classes += ' navbar-header';
    if (isTransitioning) classes += ' navbar-fade-out';
    else classes += ' navbar-fade-in';
    return classes;
  };

  return (
    <div className={getNavbarClasses()}>
      <div className="access">
        <Link className="link" href="/"> <i className="bi bi-house-fill"></i>{t.navbar.home}</Link>
        <a className="link" href="./Personal">
          <i className="bi bi-person-raised-hand"></i>
          <span>{t.navbar.solo}</span>
        </a>
        <a className="link" href="./Grupal">
          <i className="bi bi-people-fill"></i>
          <span>{t.navbar.grupal}</span>
        </a>
        <a className="link" href="https://www.linkedin.com/in/albertoambriz/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
          <span>{t.navbar.linkedin}</span>
        </a>
        <a className="link" href="https://github.com/byQuesters/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
          <span>{t.navbar.github}</span>
        </a>
        <a className="link" href={cvFile} download={cvName}>
          <i className="bi bi-file-earmark-person-fill"></i>
          <span>{t.navbar.cv}</span>
        </a>
      </div>
    </div>
  );
}