import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

// ICONS TECNOLOGIES
import htmlpng from '../../public/icons/html5.png';
import csspng from '../../public/icons/css3.png';
import jspng from '../../public/icons/js.png';
import reactpng from '../../public/icons/reactn.png';
import nextpng from '../../public/icons/nextjs.png';
import mysqlpng from '../../public/icons/mysql.png';
import nodepng from '../../public/icons/nodejs.png';
import gitpng from '../../public/icons/git.png';
import githubpng from '../../public/icons/github.png';
import terminalpng from '../../public/icons/terminal.png';
import npm from '../../public/icons/npm.png';
import swiftpng from '../../public/icons/swift.png';
import pythonpng from '../../public/icons/python.png';
import phppng from '../../public/icons/php.png';
import prismapng from '../../public/icons/prisma.png';
import vscodepng from '../../public/icons/vscode.png';

const Tecnologias = () => {
  const { t } = useLanguage();

  return (
    <div className="lenguajes">
        <h2>{t.tecnologias.title}</h2>

      <div className="grid-containertec">
          <div className="grid-itemtec">
            <h2>{t.tecnologias.frontend}</h2>
             <div className="tecnologias">
              <div className="image-with-text">
              <Image src={htmlpng} width={200} height={200} alt="HTML5" />                
              <p>{t.tecnologias.html}</p>
              </div>
              <div className="image-with-text">
              <Image src={csspng} width={200} height={200} alt="CSS" />                
              <p>{t.tecnologias.css}</p>
              </div>
              <div className="image-with-text">
                <Image src={jspng} width={200} height={200} alt="JavaScript" />                
                <p>{t.tecnologias.javascript}</p>
              </div>
              <div className="image-with-text">
                <Image src={reactpng} width={200} height={200} alt="React" />                
                <p>{t.tecnologias.react}</p>
              </div>
            </div>
          </div>
          <div className="grid-itemtec">
            <h2>{t.tecnologias.backend}</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src={prismapng} width={200} height={200} alt="Prisma" />                
              <p>{t.tecnologias.prisma}</p>
              </div>
              <div className="image-with-text">
              <Image src={phppng} width={200} height={200} alt="PHP" />                
              <p>{t.tecnologias.php}</p>
              </div>
              <div className="image-with-text">
              <Image src={nextpng} width={200} height={200} alt="NextJS" />                
              <p>{t.tecnologias.nextjs}</p>
              </div>
              <div className="image-with-text">
              <Image src={mysqlpng} width={200} height={200} alt="MySQL" />                
              <p>{t.tecnologias.mysql}</p>
              </div>
              <div className="image-with-text">
              <Image src={nodepng} width={200} height={200} alt="NodeJS" />                
              <p>{t.tecnologias.nodejs}</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>{t.tecnologias.extra}</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src={swiftpng} width={200} height={200} alt="Swift" />                
              <p>{t.tecnologias.swift}</p>
              </div>
              <div className="image-with-text">
              <Image src={pythonpng} width={200} height={200} alt="Python" />                
              <p>{t.tecnologias.python}</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>{t.tecnologias.tools}</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src={terminalpng} width={200} height={200} alt="Terminal" />                
              <p>{t.tecnologias.terminal}</p>
              </div>
              <div className="image-with-text">
              <Image src={vscodepng} width={200} height={200} alt="VS Code" />                
              <p>{t.tecnologias.vscode}</p>
              </div>
              <div className="image-with-text">
              <Image src={gitpng} width={200} height={200} alt="Git" />                
              <p>{t.tecnologias.git}</p>
              </div>
              <div className="image-with-text">
              <Image src={githubpng} width={200} height={200} alt="GitHub" />                
              <p>{t.tecnologias.github}</p>
              </div>
              <div className="image-with-text">
              <Image src={npm} width={200} height={200} alt="npm" />                
              <p>{t.tecnologias.npm}</p>
              </div>
            </div>
          </div>

        </div>
      
      </div>
  )
}

export default Tecnologias;