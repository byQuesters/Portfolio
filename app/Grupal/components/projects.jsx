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
          <Image src={reactpng} width={200} height={200} alt="" />
          <Image src={prismapng} width={200} height={200} alt="" />
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
            <Image src={nodepng} width={40} height={40} alt="" />
            <Image src={mysqlpng} width={40} height={40} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
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
            <Image src={pythonpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("BugB")}>
          <div className="nameprj">BuggBlock</div>
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={BB} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Web Blog informatico enfocado a la tecnologia y computadoras, los usuarios pueden hacer nuevas publicaciones y el admin borrarlas</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={phppng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={mysqlpng} width={40} height={40} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

      </div>
      <br/><br/><br/><br/>

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
              &quot;Spike&quot; es una aplicación Móvil que actúa como gestor integral de clínicas veterinarias y servicios asistenciales de animales domésticos. El problema que resuelve es la falta de un sistema centralizado y accesible para que los dueños de mascotas administren citas, mantengan un historial médico, y contratar servicios adicionales de manera eficiente. Esta plataforma también permitirá a los veterinarios y al personal de la clínica gestionar eficazmente su servicios, clientes y el personal involucrado.
              </h4>
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
              CARACTERISTICAS PRINCIPALES DEL SISTEMA:
              <ul>
                  <li>ADMINISTRADOR PRINCIPAL: Gestión de todo el sistema con acceso a todas las funcionalidades.</li>
                  <br /><li>REGISTRO DE CLIENTE Y MASCOTAS: Almacenamiento seguro e información organizada sobre los clientes y sus mascotas.</li>
                  <br /><li>GESTION DE SERVICIOS: Creación, consulta, modificación y Eliminación de servicios, clientes y mascotas.</li>
                  <br /><li>ROLES DE USUARIOS: Diferenciación de accesos y funcionalidades según el rol del usuario: usuario (administrador, veterinario, personal de soporte, cliente).</li>
                  <br /><li>GENERACION DE INFORMES: Creación de informes detallados sobre el uso de los servicios, la salud de las mascotas y la gestión interna del personal y los clientes.</li>
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

      {modalOpen && selectedProject === "harmony_heaven" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Harmony &amp; Heaven</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
              <Image src={nodepng} width={40} height={40} alt="" />
              <Image src={mysqlpng} width={40} height={40} alt="" />
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
              <a href="https://github.com/AmbrizAlberto/HarmonyAndHeavenm.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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
              <Image src={pythonpng} width={40} height={40} alt="" />
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
              <a href="https://github.com/AmbrizAlberto/PICK-EM-EVERITHING---PYGAME-PROJECT.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
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

            <div className="nameprj1">BuggBlock</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
              <Image src={phppng} width={200} height={200} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
              <Image src={mysqlpng} width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Un web blog para amantes de la tecnologia.</h4>
            </div>
            <div className='descriptionprj3'>
              <p>BuggBlock es una pagina web tipo Blog con enfoque a informacion tecnologica donde los usuarios registrados podran realizar publicaciones con texto y fotos para despues verlas en el Main</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              BuggBlock fue desarrollado con php para el manejo de datos de usuarios y publicaciones por el lado del Backend, y el diseño realizado con iconos de Bootstrap y CSS puro. 
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/BuggBlock.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;
