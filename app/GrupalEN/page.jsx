// page.jsx
'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from "./prjsviews.css"

import NavbarEN from '../components/ingles/navbaren';
import Proyectos from './components/projects';
import CreadorEN from '../components/ingles/creatoren';

export default function Grupalprjs() {
    const [english, setEnglish] = useState(true); // Set initial state to true for English version

    return (
        <div className='main'>
            <NavbarEN />
            <Proyectos/>
            <CreadorEN/>
            <br /><br /><br />

        <Head>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
            <script src='script/scrollreveal.js' async defer />
        </Head>
        </div>
    )
}
