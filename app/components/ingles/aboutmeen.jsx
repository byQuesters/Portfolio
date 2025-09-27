'use client'
import { useState } from 'react';
import Image from 'next/image';
import miImagen from '../../images/1mb.jpeg';
import miImagen2 from '../../images/1mb2.jpeg';

const AboutmeEN = () => {
    const downloadCVEN = "./CVEN.pdf";
    const [hovered, setHovered] = useState(false);

    return (
        <div className="personaldata">
            <div className="datos1">
                <div className="photomia">
                    <a href={downloadCVEN} download="CV ENG - Alberto Ambriz.pdf">
                        <Image 
                            onMouseEnter={() => setHovered(true)} 
                            onMouseLeave={() => setHovered(false)} 
                            src={hovered ? miImagen : miImagen2} 
                            width={200}
                            height={200}
                            priority={true} 
                            alt="Alberto Ambriz Profile Photo" 
                        />
                    </a>
                </div>
                <div className="datos">
                    <div className="nombre">
                        Alberto Ambriz
                    </div>
                </div>
            </div>
            <div className="datos2">
                <div className="available-work-wrapper">
                    <div className="available-work-container">
                        <div className="border-animation-top"></div>
                        <div className="border-animation-bottom"></div>
                        <span className="available-work-text">
                            AVAILABLE TO WORK
                        </span>
                    </div>
                </div>
                <div className="aboutme">
                    <h2>ABOUT ME...</h2>
                    <div className="descriptionme">
                        Hello! I am a FullStack developer Software Engineer with more than 4 years of experience in the field of programming. I look forward to the opportunity to be part of your development team!                
                    </div>
                </div>
            </div>

            <style jsx>{`
                .available-work-wrapper {
                    display: flex !important;
                    justify-content: flex-start !important;
                    align-items: flex-start !important;
                    width: 100% !important;
                    margin-bottom: 1rem !important;
                    text-align: left !important;
                    width: auto !important;
                    
                }

                .available-work-container {
                    position: relative !important;
                    display: inline-block !important;
                    padding: 0.5rem 1rem !important;
                    border: 1px solid rgba(0, 0, 0, 0.58) !important;
                    border-radius: 0.75rem !important;
                    background: linear-gradient(135deg, #90fe9237 0%, #5e8bde2e 100%) !important;
                    overflow: hidden !important;
                    transition: transform 0.3s ease !important;
                    margin: 0 !important;
                    margin-left: 0 !important;
                    margin-right: auto !important;
                }

                .available-work-container:hover {
                    transform: scale(1.1) !important;
                }

                .available-work-text {
                    position: relative !important;
                    z-index: 10 !important;
                    color: black !important;
                    font-size: 0.875rem !important;
                    font-weight: bold !important;
                    white-space: nowrap !important;
                    text-align: center !important;
                    display: block !important;
                }

                .border-animation-top {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, #70cfffff, #ff91f0ff, #ffe570ff);
                    animation: slideTop 2s linear infinite;
                    z-index: 5;
                }

                .border-animation-bottom {
                    position: absolute;
                    bottom: 0;
                    right: -100%;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, #ffe570ff, #ff91f0ff, #70cfffff);
                    animation: slideBottom 2s linear infinite 1s;
                    z-index: 5;
                }

                @keyframes slideTop {
                    0% { 
                        left: -100%; 
                    }
                    50%, 100% { 
                        left: 100%; 
                    }
                }

                @keyframes slideBottom {
                    0% { 
                        right: -100%; 
                    }
                    50%, 100% { 
                        right: 100%; 
                    }
                }

                @media (min-width: 640px) {
                    .available-work-text {
                        font-size: 1rem;
                    }
                }

                /* Responsive adjustments */
                @media (max-width: 640px) {
                    .section {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default AboutmeEN;