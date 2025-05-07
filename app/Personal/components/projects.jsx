import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';

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
      <h2 id='proyecto'>PROYECTOS</h2>

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
        <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
        <Image src="/icons/css3.png" width={200} height={200} alt="" />
        <Image src="/icons/js.png" width={200} height={200} alt="" />
        </div>
        <div className="github">
          <i className="bi bi-eye-fill"></i>Ver proyecto
        </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("SMatiz")}>
        <div className="nameprj">Gestor de citas - Salon Matiz</div>
        <div className="categorie">Personal</div>
        <div className="photoprj">
          <Image src={SMMain} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className="descriptionprj">
          <h4>Pagina web para agendar citas y gestionar horario de una barberia</h4>
        </div>
        <div className="lenguajesprj">
          <Image src="/icons/js.png" width={200} height={200} alt="" />
          <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
          <Image src="/icons/css3.png" width={200} height={200} alt="" />
          <Image src="/icons/prisma.png" width={200} height={200} alt="" />
          <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
        </div>
        <br />
        <div className="github">
          <i className="bi bi-eye-fill"></i>Ver proyecto
        </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("EarthQA")}>
          <div className="nameprj">Aplicacion de Alertas Sismicas</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">x
            <Image src={EQAP} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Aplicacion movil para Android para mostrar terremotos</h4>
          </div>
          <div className="lenguajesprj">
          <Image src="/icons/js.png" width={200} height={200} alt="" />
          <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
          <Image src="/icons/css3.png" width={200} height={200} alt="" />
          <Image src="/icons/prisma.png" width={200} height={200} alt="" />
          <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
          </div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("Pixels")}>
          <div className="nameprj">Pixels</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={PX1} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Red Social para Fotografos</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="/icons/js.png" width={200} height={200} alt="" />
            <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            <Image src="/icons/prisma.png" width={200} height={200} alt="" />
            <Image src="/icons/nodejs.png" width={200} height={200} alt="" />          
          </div>
          <div className="categorie" style={{ color: 'yellow' }}>En desarrollo</div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NoteApp")}>
          <div className="nameprj">Notes App</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={NtePV} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Aplicacion de Notas para iOS</h4>
          </div>
          <div className="lenguajesprj">
          <Image src="/icons/swift.png" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("CarRecognition")}>
            <div className="nameprj">Reconocimiento de Carros</div>
            <div className="categorie">Personal</div>
            <div className="photoprj">
              <Image src={CR} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Reconocimiento de carros en videos con Python</h4>
            </div>
            <div className="lenguajesprj">
            <Image src="/icons/python.png" width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>Ver proyecto
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NumberRecog")}>
          <div className="nameprj">Number Recognition</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">

          </div>
          <div className="descriptionprj">
            <h4>Programa de reconocimiento de digitos dibujados por el usuario</h4>
          </div>
          <div className="lenguajesprj">
          <Image src="/icons/python.png" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
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

            <div className="nameprj1">St. John&apos;s Gym</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            <Image src="/icons/js.png" width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>Pagina Web St. John&apos;s <br /> (Todos los derechos reservados)</h4>
            </div>
            <div className='descriptionprj3'>
              <p>Landing Page Responsive desarrollado para mostrar la informacion de interes publico de un gimnasio.</p>
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
              <p>La pagina web presenta 2 vistas, el home con informacion detallada y la pagina de contacto donde se presenta informacion de contacto y ubicacion del gimnasio</p>
            </div>
            <div className="photoprj1">
              <Image src={StJ4} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://st-johns-gym.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>Ver en Produccion</a>
              </button>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byQuesters/St-Johns-Gym"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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

            <div className="nameprj1">Aplicacion de Alertas Sismicas para Android</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/js.png" width={200} height={200} alt="" />
            <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            <Image src="/icons/prisma.png" width={200} height={200} alt="" />
            <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>Aplicacion web publica para que las personas puedan agendar citas en una barberia.</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>Automaticamente se gestionaran los horarios de la barberia para no solapar citas sobre otras, cada servicio tiene un valor de tiempo que se toma en cuenta en la suma para el gestor de horarios disponibles sin interponserse entre otra cita para otros usuarios despues de que se agenden. </p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p> El Dashboard permite al administrador poder ver las citas del dia actual, filtrarlas entre fechas, servicios e inclusos nombres, ademas, este podra crear noticias para sus clientes y eliminarlas desde el mismo Dashboard</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>Ver en Produccion</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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

            <div className="nameprj1">Gestor de citas para Barberia</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/js.png" width={200} height={200} alt="" />
            <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            <Image src="/icons/prisma.png" width={200} height={200} alt="" />
            <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>Aplicacion web publica para que las personas puedan agendar citas en una barberia.</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>Automaticamente se gestionaran los horarios de la barberia para no solapar citas sobre otras, cada servicio tiene un valor de tiempo que se toma en cuenta en la suma para el gestor de horarios disponibles sin interponserse entre otra cita para otros usuarios despues de que se agenden. </p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p> El Dashboard permite al administrador poder ver las citas del dia actual, filtrarlas entre fechas, servicios e inclusos nombres, ademas, este podra crear noticias para sus clientes y eliminarlas desde el mismo Dashboard</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>Ver en Produccion</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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

            <div className="nameprj1">Pixels</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/js.png" width={200} height={200} alt="" />
            <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            <Image src="/icons/prisma.png" width={200} height={200} alt="" />
            <Image src="/icons/nodejs.png" width={200} height={200} alt="" />            </div>
            <div className="photoprj1">
              <Image src={PX1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <h4>Red social para fotografos, los usuarios compartiran sus fotografias y se mostraran metadatos de estas, las fotografias no podran ser robadas.</h4>
            </div>
            <div className="photoprj1">
              <Image src={PX2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>El principal objetivo de Pixels es ser una red social 100% enfocada en fotografia con las novedades de ofrecer alta seguridad para sus usuarios permitiendo incluso la venta de su arte exclusivamente.</p>
            </div>
            <div className="photoprj1">
              <Image src={PX3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>Pixels aun esta en desarrollo por lo que aun faltan muchas funciones por implementar.</p>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://pixels-flax.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>Ver en Produccion</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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
            <Image src="/icons/python.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={CR1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Reconocimiento de coches en videos con python utilizando Yolov5</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Cualquier coche que aparezca detectado en el video aparecera carcado dentro de un cuadrado rojo con su etiqueta</p>
              <p>El programa facilita el cambio de color desde el codigo, ademas esta limitado a soloamente detectar los vehiculos, aunque realmente eso se puede quitar facilmente eliminando solo la duncion desde el codigo.</p>

              <p>Es necesario instalar Yolov5 con pip</p>
            </div>
            <div className="photoprj1">
              <Image src={CR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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
            <Image src="/icons/swift.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Aplicacion de Notas para iOS desarrollada con SwiftUI</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Un proyecto personal para conocer y aprender las bases del desarrollo para iOS</p>
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Con Notes APP se puede crear, editar y borrar una nota: 
            </div>
            <div className="photoprj1">
              <Image src={Nte1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                Pruebala con Xcode
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/NotesAPP-SwiftUI.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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
            <Image src="/icons/python.png" width={200} height={200} alt="" />
            </div>
            {/* <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div> */}

            <div className="descriptionprj1">
              <h4>Reconocimiento de numeros dibujados en el programa</h4>
            </div>
            <div className='descriptionprj3'>
              <p>Programa con inteligencia artificial entrenada àra el reconocimiento de digitos numericos dibujados por el usuario.</p>
            </div>
            {/* <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div> */}
            <br />
            <br />
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/Drawn-Digits-Recognition-1.0/tree/master/Reconocimiento%20de%20numero"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;
