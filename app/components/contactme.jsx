'use client'
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contactame = () => {
    const { t } = useLanguage();
    const [copiadoCorreo, setCopiadoCorreo] = useState(false);
    const [copiadoTelefono, setCopiadoTelefono] = useState(false);

    function copiarAlPortapapeles(texto) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto);
            setCopiadoCorreo(true);
            setTimeout(() => setCopiadoCorreo(false), 3000);
        }
    }

    function copiarTelefono(texto) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto);
            setCopiadoTelefono(true);
            setTimeout(() => setCopiadoTelefono(false), 3000);
        }
    }

    return (
        <div className="contactme">
            <h1 className="contactmett">{t.contactme.title}</h1>
            <h1>{t.contactme.email}</h1>
            <div className="correo">
            <span id="url" className='correotxt'>albertpoambez@icloud.com</span>
            <button className='correobtn' onClick={() => copiarAlPortapapeles('albertpoambez@icloud.com')}>
                {copiadoCorreo ? t.contactme.copied : t.contactme.copy}
            </button>
            </div>
            {/* <h1>{t.contactme.phone}</h1>
            <div className="telefono">
            <span id="tel" className='correotxt'>+52 3141576598</span>
            <button className='correobtn' onClick={() => copiarTelefono('+523141576598')}>
                {copiadoTelefono ? t.contactme.copied : t.contactme.copy}
            </button>
            </div> */}
        </div>
    )
}

export default Contactame;