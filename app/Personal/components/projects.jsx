import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

 // ICONS TECNOLOGIES
 import htmlpng from '../../../public/icons/html5.png';
 import csspng from '../../../public/icons/css3.png';
 import jspng from '../../../public/icons/js.png';
 import reactpng from '../../../public/icons/reactn.png';
 import nextpng from '../../../public/icons/nextjs.png';
 import mysqlpng from '../../../public/icons/mysql.png';
 import nodepng from '../../../public/icons/nodejs.png';
 import gitpng from '../../../public/icons/git.png';
 import githubpng from '../../../public/icons/github.png';
 import terminalpng from '../../../public/icons/terminal.png';
 import npm from '../../../public/icons/npm.png';
 import swiftpng from '../../../public/icons/swift.png';
 import pythonpng from '../../../public/icons/python.png';
 import phppng from '../../../public/icons/php.png';
 import prismapng from '../../../public/icons/prisma.png';
 import vscodepng from '../../../public/icons/vscode.png';
 
 // IMAGES PROJECTS
import CR from '../../images/CR.png';
import CR1 from '../../images/CR1.png';
import CR2 from '../../images/CR2.png';
import NtePV from '../../images/NotePV.jpeg';
import Nte from '../../images/Note.png';
import Nte1 from '../../images/Note1.png';
import PEE2 from '../../images/PickEm2.jpg';
import BB from '../../images/BB1.jpg';
import BB1 from "../../images/BB2.jpeg";
import PX1 from "../../images/PX1.jpeg";
import PX2 from "../../images/PX2.jpeg";
import PX3 from "../../images/PX3.jpeg";
import SMMain from "../../images/SMMain.png"
import SMDb from "../../images/SMDb.png"
import SMLg from "../../images/SMLg.png"
import SM from "../../images/SM.png"
import EQA1 from "../../images/EQA1.png"
import EQAP from "../../images/EQAP.png"
import StJ1 from '../../images/StJ1.png';
import StJ2 from '../../images/StJ2.png';
import StJ3 from '../../images/StJ3.png';
import StJ4 from '../../images/StJ4.png';
import NR1 from '../../images/NR1.png';
import NR2 from '../../images/NR2.png';

import "../../css/modal.css";
import "../../css/project.css";

const Proyectos = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModalForProject = (projectId) => {
    setSelectedProject(projectId);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className='projects' >
      <h2 id='proyecto'>{t.projects.title}</h2>

      <div className="grid-containerprj">

      <button className="container-project" onClick={() => openModalForProject("STJohns")}>
        <div className="nameprj">{t.projects.list.stjohns.name}</div>
        <div className="categorie">{t.projects.categories.grupal}</div>
        <div className="photoprj">
          <Image src={StJ1} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className="descriptionprj">
          <h4>{t.projects.list.stjohns.shortDesc}</h4>
        </div>
        <div className="lenguajesprj">
        <Image src={nextpng} width={200} height={200} alt="" />
        <Image src={csspng} width={200} height={200} alt="" />
        <Image src={jspng} width={200} height={200} alt="" />
        </div>
        <div className="github">
          <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
        </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("SMatiz")}>
        <div className="nameprj">{t.projects.list.smatiz.name}</div>
        <div className="categorie">{t.projects.categories.personal}</div>
        <div className="photoprj">
          <Image src={SMMain} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className="descriptionprj">
          <h4>{t.projects.list.smatiz.shortDesc}</h4>
        </div>
        <div className="lenguajesprj">
          <Image src={jspng} width={200} height={200} alt="" />
          <Image src={nextpng} width={200} height={200} alt="" />
          <Image src={csspng} width={200} height={200} alt="" />
          <Image src={prismapng} width={200} height={200} alt="" />
          <Image src={nodepng} width={200} height={200} alt="" />
        </div>
        <br />
        <div className="github">
          <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
        </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("EarthQA")}>
          <div className="nameprj">{t.projects.list.earthqa.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">x
            <Image src={EQAP} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.earthqa.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={jspng} width={200} height={200} alt="" />
          <Image src={nextpng} width={200} height={200} alt="" />
          <Image src={csspng} width={200} height={200} alt="" />
          <Image src={prismapng} width={200} height={200} alt="" />
          <Image src={nodepng} width={200} height={200} alt="" />
          </div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("Pixels")}>
          <div className="nameprj">{t.projects.list.pixels.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">
            <Image src={PX1} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.pixels.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />          
          </div>
          <div className="categorie" style={{ color: 'yellow' }}>{t.projects.inDevelopment}</div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NoteApp")}>
          <div className="nameprj">{t.projects.list.noteapp.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">
            <Image src={NtePV} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.noteapp.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={swiftpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("CarRecognition")}>
            <div className="nameprj">{t.projects.list.carrecognition.name}</div>
            <div className="categorie">{t.projects.categories.personal}</div>
            <div className="photoprj">
              <Image src={CR} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>{t.projects.list.carrecognition.shortDesc}</h4>
            </div>
            <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NumberRecog")}>
            <div className="nameprj">{t.projects.list.numberrecog.name}</div>
            <div className="categorie">{t.projects.categories.personal}</div>
            <div className="photoprj">
              <Image src={NR1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>{t.projects.list.numberrecog.shortDesc}</h4>
            </div>
            <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
            </div>
        </button>

      </div>
      <br/><br/><br/><br/>

      {modalOpen && selectedProject === "STJohns" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.stjohns.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={jspng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4 dangerouslySetInnerHTML={{ __html: t.projects.list.stjohns.modal.desc1 }} />
            </div>
            <div className='descriptionprj3'>
              <p>{t.projects.list.stjohns.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={StJ2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={StJ3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              <p>{t.projects.list.stjohns.modal.desc3}</p>
            </div>
            <div className="photoprj1">
              <Image src={StJ4} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://st-johns-gym.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byQuesters/St-Johns-Gym"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "EQAP" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.earthqa.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.earthqa.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>{t.projects.list.smatiz.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.smatiz.modal.desc3}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "SMatiz" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.smatiz.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.smatiz.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>{t.projects.list.smatiz.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.smatiz.modal.desc3}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "Pixels" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.pixels.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />            </div>
            <div className="photoprj1">
              <Image src={PX1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.pixels.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={PX2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>{t.projects.list.pixels.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={PX3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.pixels.modal.desc3}</p>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://pixels-flax.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/Pixels.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "CarRecognition" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.carrecognition.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={CR1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.carrecognition.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.carrecognition.modal.desc2 }} />
            </div>
            <div className="photoprj1">
              <Image src={CR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "NoteApp" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.noteapp.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={swiftpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.noteapp.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p>{t.projects.list.noteapp.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              {t.projects.list.noteapp.modal.desc3}
            </div>
            <div className="photoprj1">
              <Image src={Nte1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                {t.projects.list.noteapp.modal.desc4}
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/NotesAPP-SwiftUI.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "NumberRecog" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.numberrecog.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.numberrecog.modal.desc1}</h4>
            </div>
            <div className='descriptionprj3'>
              <p>{t.projects.list.numberrecog.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={NR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/Drawn-Digits-Recognition-1.0/tree/master/Reconocimiento%20de%20numero"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;