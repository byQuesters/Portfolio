'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from "./css/main.css";
import stylerespons from "./css/mainrespons.css";

import Navbar from './components/español/navbar';
import Aboutme from './components/español/aboutme';
import Tecnologias from './components/español/tecnologies';
import Proyectos from './components/español/projects';
import Contactame from './components/español/contactme';
import Creador from './components/español/creator';

import NavbarEN from './components/ingles/navbaren';
import AboutmeEN from './components/ingles/aboutmeen';
import TecnologiasEN from './components/ingles/tecnologiesen';
import ProyectosEN from './components/ingles/projectsen';
import ContactameEN from './components/ingles/contactmeen';
import CreadorEN from './components/ingles/creatoren';

export default function Portafolio() {
  const [english, setEnglish] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const downloadCV = "./CVES.pdf";
  const downloadCVEN = "./CVEN.pdf";

  useEffect(() => {
    // Detectar cuando el loading screen desaparezca
    const checkIfLoaded = () => {
      const mainContent = document.querySelector('.main-content');
      return mainContent && mainContent.style.visibility === 'visible';
    };

    // Verificar inmediatamente si ya está cargado
    if (checkIfLoaded()) {
      setIsLoaded(true);
      return;
    }

    // Observer para detectar cambios en el main-content
    const observer = new MutationObserver(() => {
      if (checkIfLoaded()) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      observer.observe(mainContent, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    // Fallback: verificar cada 100ms por si acaso
    const fallbackInterval = setInterval(() => {
      if (checkIfLoaded()) {
        setIsLoaded(true);
        clearInterval(fallbackInterval);
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearInterval(fallbackInterval);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      // Delay para asegurar que todo esté completamente renderizado
      const initDelay = setTimeout(() => {
        initScrollReveal('.personaldata', 'bottom');
        initScrollReveal('.lenguajes', 'bottom');
        initScrollReveal('.projects', 'bottom');
        initScrollReveal('.contactme', 'bottom');
      }, 200); // Aumenté el delay un poco más

      return () => clearTimeout(initDelay);
    }
  }, [isLoaded]);

  async function initScrollReveal(selector, origin) {
    if (typeof window !== 'undefined') {
      try {
        const ScrollReveal = (await import('scrollreveal')).default;
        
        // Verificar que los elementos existan antes de aplicar ScrollReveal
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
          ScrollReveal().reveal(selector, {
            duration: 1000,
            origin: origin,
            distance: '0px',
            delay: 100,
            easing: 'ease-in-out',
            reset: false,
            viewFactor: 0.1
          });
          console.log(`ScrollReveal aplicado a: ${selector}`); // Para debug
        } else {
          console.warn(`No se encontraron elementos para: ${selector}`); // Para debug
        }
      } catch (error) {
        console.error('Error al cargar ScrollReveal:', error);
      }
    }
  }

  return (
    <div className='main'>
      <div className='btnlinks'>
        <button onClick={() => setEnglish(!english)}>
            <i className="bi bi-translate"></i>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/alberto-ambriz-chavez/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </button>
        <button>
          <a href="https://github.com/ambrizalberto/" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </button>
        <button>
          <a href={downloadCV} download="CV ESP - Alberto Ambriz.pdf">
            <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </button>
        <button>
          <a href={downloadCVEN} download="CV ENG - Alberto Ambriz.pdf">
            <i className="bi bi-file-earmark-person"></i>
          </a>
        </button>
      </div>
  
      {english ? (
        <>
          <div className='btnlinks1'>
            <button>
              <a href="./PersonalEN">
                <i className="bi bi-person-raised-hand"></i>
              </a>
            </button>
            <button>
              <a href="./GrupalEN">
                <i className="bi bi-people-fill"></i>
              </a>
            </button>
          </div>
          <NavbarEN/>
          <AboutmeEN/>        
          <TecnologiasEN />
          <ProyectosEN />
          <ContactameEN />
          <CreadorEN/>
        </>
      ) : (
        <>
          <div className='btnlinks1'>
            <button>
              <a href="./Personal">
                <i className="bi bi-person-raised-hand"></i>
              </a>
            </button>
            <button>
              <a href="./Grupal">
                <i className="bi bi-people-fill"></i>
              </a>
            </button>
          </div>
          <Navbar />
          <Aboutme/>
          <Tecnologias />
          <Proyectos />
          <Contactame />
          <Creador/>
        </>
      )}

      <Head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}