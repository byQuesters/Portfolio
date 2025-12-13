// page.jsx
'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from "./prjsviews.css"

import Navbar from '../components/español/navbar';
import Proyectos from './components/projects';
import Creador from '../components/español/creator';

export default function Personalprjs() {
    const [english, setEnglish] = useState(true); // Set initial state to true for English version

    return (
        <div className='main'>
            <Navbar />
            <Proyectos/>
            <Creador/>
            <br /><br /><br />

        <Head>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
            <script src='script/scrollreveal.js' async defer />
        </Head>
        </div>
    )
}
