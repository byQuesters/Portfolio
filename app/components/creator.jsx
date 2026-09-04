import { useLanguage } from '../context/LanguageContext';

const Creador = () => {
  const { t } = useLanguage();
  return(
    <div className='creador'>
        <h4>{t.creator.rights}</h4>
        <h4>{t.creator.tech}</h4>
        {t.creator.by}
    </div>
  )
}

export default Creador;