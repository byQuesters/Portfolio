import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';

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
import StJ1 from '../../images/StJ1.png';
import StJ2 from '../../images/StJ2.png';
import StJ3 from '../../images/StJ3.png';
import StJ4 from '../../images/StJ4.png';
import PX1 from "../../images/PX1.jpeg";
import PX2 from "../../images/PX2.jpeg";
import PX3 from "../../images/PX3.jpeg";
import SMMain from "../../images/SMMain.png"
import SMDb from "../../images/SMDb.png"
import SMLg from "../../images/SMLg.png"
import SM from "../../images/SM.png"

import "../../css/modal.css";
import "../../css/project.css";

const Proyectos = () => {
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
      <h2 id='project'>PROJECTS</h2>

      <div className="grid-containerprj">

        <button className="container-project" onClick={() => openModalForProject("STJohns")}>
          <div className="nameprj">Gimnasio St. John&apos;s</div>
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={StJ1} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Pagina web landing page responsive para un gimnasio.</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={nextpng} width={200} height={200} alt="" />
          <Image src={csspng} width={200} height={200} alt="" />
          <Image src={jspng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("SMatiz")}>
          <div className="nameprj">Appointment Manager - Salon Matiz</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={SMMain} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Website for scheduling appointments and managing the schedule of a barbershop</h4>
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
            <i className="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("Pixels")}>
          <div className="nameprj">Pixels</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={PX1} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Social Network for Photographers</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
          </div>
          <div className="categorie" style={{ color: 'yellow' }}>In development</div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NoteApp")}>
          <div className="nameprj">Notes App</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={NtePV} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Notes application for iOS</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={swiftpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("CarRecognition")}>
            <div className="nameprj">Car Recognition</div>
            <div className="categorie">Personal</div>
            <div className="photoprj">
              <Image src={CR} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Car recognition in videos with Python</h4>
            </div>
            <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>View project
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NumberRecog")}>
          <div className="nameprj">Number Recognition</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">

          </div>
          <div className="descriptionprj">
            <h4>Digit recognition program drawn by the user</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={pythonpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>View project
          </div>
        </button>

      </div>
      <br/><br/><br/><br/>

      {modalOpen && selectedProject === "SMatiz" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Appointment Manager for Barbershop</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>Public web application for people to schedule appointments at a barbershop.</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>The schedules of the barbershop will be automatically managed to avoid overlapping appointments. Each service has a time value that is considered in the total for the available schedule manager without interfering with other appointments for other users after they are booked.</p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>The Dashboard allows the administrator to view the appointments for the current day, filter them by dates, services, and even names. Additionally, they can create news for their clients and delete them from the same Dashboard.</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>View in Production</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "STJohns" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">St. John&apos;s Gym</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
              <Image src={nextpng} width={200} height={200} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
              <Image src={jspng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>St. Johns Website <br /> (All rights reserved)</h4>
            </div>
            <div className='descriptionprj3'>
              <p>Responsive Landing Page developed to display public interest information for a gym.</p>
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
              <p>The website features 2 views: the home page with detailed information and the contact page showing the gym&apos;s contact information and location.</p>
            </div>
            <div className="photoprj1">
              <Image src={StJ4} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://st-johns-gym.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>View in Production</a>
              </button>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byQuesters/St-Johns-Gym"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
            </button>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "Pixels" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Pixels</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PX1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <h4>Social network for photographers, users will share their photographs and metadata will be displayed, the photographs cannot be stolen.</h4>
            </div>
            <div className="photoprj1">
              <Image src={PX2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>The main objective of Pixels is to be a social network 100% focused on photography with the added benefit of offering high security for its users, even allowing them to sell their art exclusively.</p>
            </div>
            <div className="photoprj1">
              <Image src={PX3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>Pixels is still under development, so many features have yet to be implemented.</p>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://pixels-flax.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>View in Production</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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

            <div className="nameprj1">Car Recognition</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={CR1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Car recognition in videos with python using Yolov5</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Any car detected in the video will appear marked within a red square with its label</p>
              <p>The program allows changing the color from the code, and it is limited to only detecting vehicles, although this can be easily removed by deleting the function from the code.</p>
              <p>It is necessary to install Yolov5 with pip</p>
            </div>
            <div className="photoprj1">
              <Image src={CR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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

            <div className="nameprj1">Notes APP</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src={swiftpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Notes application for iOS developed with SwiftUI</h4>
            </div>
            <div className='descriptionprj2'>
              <p>A personal project to learn the basics of iOS development</p>
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              With Notes APP you can create, edit, and delete a note: 
            </div>
            <div className="photoprj1">
              <Image src={Nte1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                Try it with Xcode
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/NotesAPP-SwiftUI.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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

            <div className="nameprj1">Number Recognition</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>SubTitle Soon...</h4>
            </div>
            <div className='descriptionprj3'>
              <p>Recognition of numbers drawn in the program... Soon</p>
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Soon...
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/Drawn-Digits-Recognition-1.0/tree/master/Reconocimiento%20de%20numero"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;

