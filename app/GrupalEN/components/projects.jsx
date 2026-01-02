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
import EF11 from "../../images/EF11.jpeg"



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

        <button className="container-project" onClick={() => openModalForProject("EnergyFlow")}>
          <div className="nameprj">Energy Flow</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={EF11} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Electrical consumption monitoring interface application for buildings with IoT sensors.</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={reactpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("Spike")}>
          <div className="nameprj">Spike - Pet Care</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={Spk12} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Mobile application for centralized management of veterinary appointments and services.</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={reactpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>View Project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("harmony_heaven")}>
          <div className="nameprj">Harmony &amp; Heaven</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={HyH} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Instrument Store with CRUD, Login and Point of Sale.</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={nodepng} width={40} height={40} alt="" />
            <Image src={mysqlpng} width={40} height={40} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
          </div>
          <div className="github">
          <i class="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("PickEmE")}>
          <div className="nameprj">Pick Em&apos; Everithing</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={PEE} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Video game developed with the Pygame Python library</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i class="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("BugB")}>
          <div className="nameprj">BuggBlock</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={BB} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Web Computer blog focused on technology and computers, users can make new posts and the admin can delete them</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={phppng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={mysqlpng} width={40} height={40} alt="" />
          </div>
          <div className="github">
            <i class="bi bi-eye-fill"></i>View project
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

            <div className="nameprj1">EnergyFlow</div>
            <div className="categorie1">Group</div>
            <div className="lenguajesprj1">
              <Image src={reactpng} width={200} height={200} alt="" />
              <Image src={prismapng} width={200} height={200} alt="" />
              <Image src={jspng} width={200} height={200} alt="" />
              <Image src={nodepng} width={200} height={200} alt="" />
              
            </div>
            <div className="descriptionprj1">
              <h4>Multiplatform Digital Twin (Web / iOS / Android) for energy monitoring interface for buildings in a university integrated with Particle IoT sensors.</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>EnergyFlow is a complete digital system for monitoring and analyzing electrical consumption designed for a university faculty. The project implements a digital twin that integrates IoT hardware, cloud storage, and an interactive web/mobile interface to visualize energy data in real time and store historical data for analysis and reporting.</p>
            </div>
            <div className='descriptionprj3'>
              MAIN OBJECTIVES: 
                <br />  - Real-time monitoring of electrical variables such as voltage, current, and power in each building.
                <br />  - Reliable data storage for subsequent analysis and trend detection.
                <br />  - Interactive dashboard to visualize real-time information.
                <br />  - Detection of irregular consumption patterns and early identification of anomalies (planned).
                <br />  - Historical analysis and reports with future forecasting capabilities.
                <br />  - User management and security with authentication via Supabase Auth for secure access.
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>Login</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>Configuration</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF2} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>Main View - Interactive Map</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>Building Information - Dashboard</h4>
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
              <h4>Historical TR - Dashboard</h4>
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
              <h4>Predictions</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF9} alt="" width={"auto"} height={"auto"} />
            </div>
            <br /><br /><br />
            <div className='descriptionprj3'>
              The project is structured into several components that work in an integrated manner:

              <br /><br />Particle Photon Sensors (IoT) 
                    <br />↓
              <br />MQTT Broker (Linux Server)
                    <br />↓
              <br />Supabase PostgreSQL Database (Persistence)
                    <br />↓
              <br />React Native Web App / Mobile App (Visualization)


              <br /><br />Photon Sensors collect voltage, current and power data in real time and MQTT is used as a lightweight communication protocol to transmit the data to the PostgreSQL database, which stores historical data in a structured way, and the web/mobile application built with React/Expo displays dynamic dashboards and graphs with that data.
            
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byQuesters/FIE-EnergyFlow"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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
            <div className="categorie1">Group</div>
            <div className="descriptionprj1">
              <h4>
              &quot;Spike&quot; is a mobile application that serves as a comprehensive management system for veterinary clinics and domestic animal care services. It solves the problem of lacking a centralized and accessible system for pet owners to manage appointments, maintain medical records, and efficiently book additional services. This platform also enables veterinarians and clinic staff to effectively manage their services, clients, and involved personnel.
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
              MAIN SYSTEM FEATURES:
              <ul>
                  <li>MAIN ADMINISTRATOR: Management of the entire system with access to all functionalities.</li>
                  <br /><li>CLIENT AND PET REGISTRATION: Secure storage and organized information about clients and their pets.</li>
                  <br /><li>SERVICE MANAGEMENT: Creation, consultation, modification and deletion of services, clients and pets.</li>
                  <br /><li>USER ROLES: Differentiated access and functionalities based on user role (administrator, veterinarian, support staff, client).</li>
                  <br /><li>REPORT GENERATION: Creation of detailed reports on service usage, pet health, and internal management of staff and clients.</li>
              </ul>
            </div>
            <div className='descriptionprj2'>
              IMPACT:
              <br />The development of this application will have a positive impact by facilitating communication between veterinarians and pet owners, as well as improving the internal management of veterinary clinics, contributing to better animal care and welfare.
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
              <a href="https://github.com/byquesters/Pet-Care.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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
            <div className="categorie1">Group</div>
            <div className="lenguajesprj1">
              <Image src={nodepng} width={40} height={40} alt="" />
              <Image src={mysqlpng} width={40} height={40} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={HyH1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>CRUD Instrument Store, Inventory and Point of Sale.</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Harmony &amp; Heaven was developed as an inventory for an instrument store where products would be recorded with &quot;units for sale&quot;, &quot;product price&quot;, and &quot;category&quot;, in addition, the point of sale was created for the customer where they can add any product available in the store to the cart.</p>
              <p>In the Seller section, Harmony &amp; Heaven has a search engine and data filtering to facilitate the collection of products, it also has an order manager for the Product Supplier where they will be registered when they are requested and when they are received to be in stock, automatically adding the quantities received in the inventory, as well as a dashboard to see summaries of sales, employees, and other things.</p>
              <p>Products can be edited or deleted if necessary.</p>

              <p>In the customer section &quot;Point of sale&quot;, the customer will only be able to see the products in stock and add them to the cart for purchase, the total price for the products to be purchased will always be shown until the purchase is made.</p>
            </div>
            <div className="photoprj1">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'> 
            <a href="https://github.com/AmbrizAlberto/HarmonyAndHeavenm.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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
              <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PEE} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Video game developed 100% with the Pygame Python library</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Pick Em&apos; Everithing is a video game dedicated to children with a focus on caring for the environment. Arthur &quot;the main character of the game&quot; will collect garbage throughout his adventure to take it to the garbage truck, referring to the responsibility of keeping a clean environment. place.</p> 
            </div>
            <div className="photoprj1">
              <Image src={PEE1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Pick Em&apos; Everithing has:
              <br />| MAIN MENU -- Spanish / English |
              <br />| LEVEL MENU -- 3 Levels |
              <br />| MUSIC WITHIN THE PROGRAM |
              <br />| SETTINGS -- Remove music, change language |            
            </div>
            <div className="photoprj1">
              <Image src={PEE2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                All elements of the video game are original and completely created from scratch by the developers, from buttons to objects, even the character himself.
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/PICK-EM-EVERITHING---PYGAME-PROJECT.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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
            <div className="categorie1">Group</div>
            <div className="lenguajesprj1">
              <Image src={phppng} width={200} height={200} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
              <Image src={mysqlpng} width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>A web blog for technology lovers.</h4>
            </div>
            <div className='descriptionprj3'>
              <p>BuggBlock is a Blog-type website focused on technological information where registered users can make publications with text and photos to later see them in the Main</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              BuggBlock was developed with PHP to manage user data and posts on the Backend side, and the design was made with Bootstrap icons and pure CSS.            
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/BuggBlock.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;
