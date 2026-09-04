'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from "./prjsviews.css"

import Navbar from '../components/navbar';
import Proyectos from './components/projects';

export default function Grupalprjs() {
    return (
        <div className='main'>
            <Navbar />
            <Proyectos/>

        <Head>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
            <script src='script/scrollreveal.js' async defer />
        </Head>
        </div>
    )
}