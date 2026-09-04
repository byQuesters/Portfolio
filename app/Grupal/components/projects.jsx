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
import HyH from '../../images/HarmonyAndHeavenM.jpg';
import HyH1 from '../../images/HarmonyAndHeavenL.jpg';
import PEE from '../../images/PickEm.jpg';
import PEE1 from '../../images/PickEm1.jpg';
import PEE2 from '../../images/PickEm2.jpg';
import BB from '../../images/BB1.jpg';
import BB1 from "../../images/BB2.jpeg";
import Spk1 from "../../images/Spk1.jpeg"
import Spk2 from "../../images/Spk2.jpeg"
import Spk3 from "../../images/Spk3.jpeg"
import Spk4 from "../../images/Spk4.jpeg"
import Spk5 from "../../images/Spk5.jpeg"
import Spk6 from "../../images/Spk6.jpeg"
import Spk7 from "../../images/Spk7.jpeg"
import Spk8 from "../../images/Spk8.jpeg"
import Spk9 from "../../images/Spk9.jpeg"
import Spk10 from "../../images/Spk10.jpeg"
import Spk11 from "../../images/Spk11.jpeg"
import Spk12 from "../../images/Spk12.jpeg"
import EF1 from "../../images/EF1.PNG"
import EF2 from "../../images/EF2.PNG"
import EF3 from "../../images/EF3.PNG"
import EF4 from "../../images/EF4.PNG"
import EF5 from "../../images/EF5.PNG"
import EF6 from "../../images/EF6.PNG"
import EF7 from "../../images/EF7.PNG"
import EF8 from "../../images/EF8.PNG"
import EF9 from "../../images/EF9.PNG"
import EF10 from "../../images/EF10.jpeg"



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

        <button className="container-project" onClick={() => openModalForProject("EnergyFlow")}>
          <div className="nameprj">{t.projects.list.energyflow.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={EF10} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.energyflow.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={reactpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("Spike")}>
          <div className="nameprj">{t.projects.list.spike.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={Spk12} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.spike.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={reactpng} width={200} height={200} alt="" />
          <Image src={prismapng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("harmony_heaven")}>
          <div className="nameprj">{t.projects.list.harmony.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={HyH} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.harmony.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={nodepng} width={40} height={40} alt="" />
            <Image src={reactpng} width={40} height={40} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("PickEmE")}>
          <div className="nameprj">{t.projects.list.pickeme.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={PEE} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.pickeme.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("BugB")}>
          <div className="nameprj">{t.projects.list.buggblock.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={BB} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.buggblock.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={phppng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={mysqlpng} width={40} height={40} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

      </div>
      <br/><br/><br/><br/>

      {modalOpen && selectedProject === "EnergyFlow" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.energyflow.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={reactpng} width={200} height={200} alt="" />
              <Image src={prismapng} width={200} height={200} alt="" />
              <Image src={jspng} width={200} height={200} alt="" />
              <Image src={nodepng} width={200} height={200} alt="" />
              
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.energyflow.modal.desc2}</p>
            </div>
            <div className='descriptionprj3'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.energyflow.modal.desc3 }} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc4}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc5}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF2} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc6}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc7}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF5} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="photoprj1">
              <Image src={EF6} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc8}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF7} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="photoprj1">
              <Image src={EF8} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc9}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF9} alt="" width={"auto"} height={"auto"} />
            </div>
            <br /><br /><br />
            <div className='descriptionprj3'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.energyflow.modal.desc10 }} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byQuesters/FIE-EnergyFlow"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "Spike" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.spike.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.spike.modal.desc1}</h4>
            </div>
            <div className="lenguajesprj1">
              <Image src={reactpng} width={200} height={200} alt="" />
              <Image src={prismapng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Spk3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br /><br />
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.spike.modal.desc2 }} />
            </div>
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.spike.modal.desc3 }} />
            </div>
            <br /><br />
            <div className="photoprj1">
              <Image src={Spk2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk5} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk6} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk7} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk8} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk9} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk10} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk11} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/Pet-Care.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "harmony_heaven" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.harmony.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={nodepng} width={40} height={40} alt="" />
              <Image src={reactpng} width={40} height={40} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={HyH1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.harmony.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.harmony.modal.desc2 }} />
            </div>
            <div className="photoprj1">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/HarmonyAndHeavenm.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "PickEmE" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.pickeme.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PEE} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.pickeme.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p>{t.projects.list.pickeme.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={PEE1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.pickeme.modal.desc3 }} />
            </div>
            <div className="photoprj1">
              <Image src={PEE2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                {t.projects.list.pickeme.modal.desc4}
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/PICK-EM-EVERITHING---PYGAME-PROJECT.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "BugB" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.buggblock.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={phppng} width={200} height={200} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
              <Image src={mysqlpng} width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.buggblock.modal.desc1}</h4>
            </div>
            <div className='descriptionprj3'>
              <p>{t.projects.list.buggblock.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              <p>{t.projects.list.buggblock.modal.desc3}</p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/BuggBlock.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;