'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import "../css/navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLanguage } from '../context/LanguageContext';

const MOBILE_BREAKPOINT = 820;

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cvFile = language === 'es' ? './CVES.pdf' : './CVEN.pdf';
  const cvName = language === 'es'
    ? 'CV ESPAÑOL 2026 - Alberto Ambriz.pdf'
    : 'CV ENGLISH 2026 - Alberto Ambriz.pdf';

  // Detección de dispositivo
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const handleChange = (e) => setIsMobile(e.matches);

    handleChange(mql);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

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
  }, [isScrolled, isTransitioning, isMobile]);

  const getNavbarClasses = () => {
    const isHeader = isMobile || isScrolled;

    let classes = 'navbar';
    if (isHeader) classes = 'navbar navbar-header';
    if (isMobile) classes += ' navbar-header-mobile';

    classes += isTransitioning ? ' navbar-fade-out' : ' navbar-fade-in';
    return classes;
  };

  // construir la clase de cada link según ruta activa
  const linkClass = (path) => {
    const isActive = pathname === path;
    return `link${isActive ? ' active' : ''}`;
  };

  return (
    <div className={getNavbarClasses()}>
      <div className="access">
        <Link className={linkClass('/')} href="/">
          <i className="bi bi-house-fill"></i>
          <span className='titulo'>{t.navbar.home}</span>
        </Link>

        <Link className={linkClass('/Personal')} href="/Personal">
          <i className="bi bi-person-raised-hand"></i>
          <span className='titulo'>{t.navbar.solo}</span>
        </Link>

        <Link className={linkClass('/Grupal')} href="/Grupal">
          <i className="bi bi-people-fill"></i>
          <span className='titulo'>{t.navbar.grupal}</span>
        </Link>

        <a className="link" href={cvFile} download={cvName}>
          <i className="bi bi-file-earmark-person-fill"></i>
          <span className='titulo'>{t.navbar.cv}</span>
        </a>

        <button className="link" onClick={toggleLanguage}>
          <i className="bi bi-translate"></i>
        </button>
      </div>
    </div>
  );
}