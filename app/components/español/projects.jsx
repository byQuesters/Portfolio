import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';

import HyH from '../../images/HarmonyAndHeavenM.jpg';
import HyH1 from '../../images/HarmonyAndHeavenL.jpg';
import PEE from '../../images/PickEm.jpg';
import PEE1 from '../../images/PickEm1.jpg';
import PEE2 from '../../images/PickEm2.jpg';
import StJ1 from '../../images/StJ1.png';
import StJ2 from '../../images/StJ2.png';
import StJ3 from '../../images/StJ3.png';
import StJ4 from '../../images/StJ4.png';
import CR from '../../images/CR.png';
import CR1 from '../../images/CR1.png';
import CR2 from '../../images/CR2.png';
import PX1 from "../../images/PX1.jpeg";
import PX2 from "../../images/PX2.jpeg";
import PX3 from "../../images/PX3.jpeg";
import SMMain from "../../images/SMMain.png"
import SMDb from "../../images/SMDb.png"
import SMLg from "../../images/SMLg.png"
import SM from "../../images/SM.png"
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
          <div className="nameprj">Gimnasio St. John's</div>
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

        <button className="container-project" onClick={() => openModalForProject("Spike")}>
          <div className="nameprj">Spike - Cuidado de Mascotas</div>
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={Spk12} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Aplicación movil para gestión de citas y servicios veterinarios de forma centralizada.</h4>
          </div>
          <div className="lenguajesprj">
          <Image src="/icons/reactn.png" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("harmony_heaven")}>
            <div className="nameprj">Harmony &amp; Heaven</div>
            <div className="categorie">Grupal</div>
            <div className="photoprj">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Tienda de instrumentos con CRUD - Inventario y Punto de venta.</h4>
            </div>
            <div className="lenguajesprj">
            <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
            <Image src="/icons/mysql.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
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

        <button className="container-project" onClick={() => openModalForProject("PickEmE")}>
          <div className="nameprj">Pick Em&apos; Everithimg</div>
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={PEE} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Videojuego desarrollado con la libreria Pygame de Python</h4>
          </div>
          <div className="lenguajesprj">
          <Image src="/icons/python.png" width={200} height={200} alt="" />
          </div>
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

      </div>

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

      {modalOpen && selectedProject === "Spike" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Spike</div>
            <div className="categorie1">Grupal</div>
            <div className="descriptionprj1">
              <h4>
                "Spike" es una aplicación Móvil que actúa como gestor integral de clínicas veterinarias y servicios asistenciales de animales domésticos. El problema que resuelve es la falta de un sistema centralizado y accesible para que los dueños de mascotas administren citas, mantengan un historial médico, y contratar servicios adicionales de manera eficiente. Esta plataforma también permitirá a los veterinarios y al personal de la clínica gestionar eficazmente su servicios, clientes y el personal involucrado.
              </h4>
            </div>
            <div className="lenguajesprj1">
            <Image src="/icons/reactn.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Spk3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br /><br />
            <div className='descriptionprj2'>
              CARACTERISTICAS PRINCIPALES DEL SISTEMA:
              <ul>
                  <li>ADMINISTRADOR PRINCIPAL: Gestión de todo el sistema con acceso a todas las funcionalidades.</li>
                  <br /><li>REGISTRO DE CLIENTE Y MASCOTAS: Almacenamiento seguro e información organizada sobre los clientes y sus mascotas.</li>
                  <br /><li>GESTION DE SERVICIOS: Creación, consulta, modificación y Eliminación de servicios, clientes y mascotas.</li>
                  <br /><li>ROLES DE USUARIOS: Diferenciación de accesos y funcionalidades según el rol del usuario: usuario (administrador, veterinario, personal de soporte, cliente).</li>
                  <li> <br />GENERACION DE INFORMES: Creación de informes detallados sobre el uso de los servicios, la salud de las mascotas y la gestión interna del personal y los clientes.</li>
              </ul>
          </div>
          <div className='descriptionprj2'>
              IMPACTO:
              <br />El desarrollo de esta aplicación tendrá un impacto positivo al facilitar la comunicación. veterinarios y propietarios de animales de compañía, así como mejorando la gestión interna de los clínicas veterinarias, contribuyendo a un mejor cuidado y bienestar animal.
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
              <a href="https://github.com/byquesters/Pet-Care.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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
            <Image src="/icons/js.png" width={200} height={200} alt="" />
          <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
          <Image src="/icons/css3.png" width={200} height={200} alt="" />
          <Image src="/icons/prisma.png" width={200} height={200} alt="" />
          <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
            </div>
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
                <a href="https://github.com/byquesters/Pixels.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "harmony_heaven" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Harmony &amp; Heaven</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
            <Image src="/icons/mysql.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={HyH1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Tienda de instrumentos con CRUD - Inventario y Punto de venta.</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Harmony &amp; Heaven se desarrollo como un inventario para una tienda de instrumentos donde se registrarán los productos con &quot;unidades a la venta&quot;, &quot;precio del producto&quot; y &quot;categoria&quot;, ademas se creo el punto de venta para el cliente donde podra añadir al carrito cualquier producto disponible de la tienda.</p>
              <p>En el apartado de Vendedor, Harmony &amp; Heaven cuenta con un motor de busqueda y filtrado de los datos para facilitar la recoleccion de productos, tambien cuenta con un gestor de pedidos al Provedor de productos donde se registraran cuando se soliciten y cuando se reciban para estar en stock añadiendose automaticamente las cantidades recibidas en el inventario, asi como un dashboard para ver resumenes de ventas, empleados y demas cosas.</p>
              <p>Los productos se pueden editar o eliminar de ser necesario.</p>

              <p>En el apartado de cliente &quot;Punto de venta&quot;, el cliente podra unicamente ver los productos en stock y añadirlos al carrito para su compra, el precio total por los productos a comprar se mostrara siempre hasta realizar la compra.</p>
            </div>
            <div className="photoprj1">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/HarmonyAndHeavenm.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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

            <div className="nameprj1">Pick Em&apos; Everithing</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/python.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PEE} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Videojuego desarrollado 100% con Python con la libreria Pygame</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Pick Em&amp;apos; Everithing es un videojuego dedicado para niños con el enfoque del cuidado del medio ambiente, Arthur &quot;el personaje principal del juego&quot; ira recogiendo basura a lo largo de su aventura para llevarla al camion recolector, haciendo referencia a la responsabilidad de mantener limpio un lugar.</p>
            </div>
            <div className="photoprj1">
              <Image src={PEE1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Pick Em&amp;apos; Everithing cuenta con: 
                <br />| MENU PRINCIPAL -- Español / Ingles |
                <br />| MENU DE NIVELES -- 3 Niveles |
                <br />| MUSICA DENTRO DEL PROGRAMA |
                <br />| CONFIGURACION -- Quitar musica, cambiar idioma |
            </div>
            <div className="photoprj1">
              <Image src={PEE2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                Todos los elementos del videojuego son originales y completamente creados desde 0 por los desarroladores, desde botones hasta objetos incluso el mismo personaje. 
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/PICK-EM-EVERITHING---PYGAME-PROJECT.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "STJohns" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">St. Johns Gym</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
            <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
            <Image src="/icons/css3.png" width={200} height={200} alt="" />
            <Image src="/icons/js.png" width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>Pagina Web St. Johns <br /> (Todos los derechos reservados)</h4>
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

    </div>
  );
}

export default Proyectos;
