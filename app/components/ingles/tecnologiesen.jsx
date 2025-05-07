import Image from 'next/image';

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

const TecnologiasEN = () => {
  return (
    <div className="lenguajes">
        <h2>TECHNOLOGIES</h2>

        <div className="grid-containertec">
          <div className="grid-itemtec">
            <h2>Frontend</h2>
             <div className="tecnologias">
              <div className="image-with-text">
              <Image src={htmlpng} width={200} height={200} alt="HTML5" />                
              <p>HTML</p>
              </div>
              <div className="image-with-text">
              <Image src={csspng} width={200} height={200} alt="HTML5" />                
              <p>CSS</p>
              </div>
              <div className="image-with-text">
                <Image src={jspng} width={200} height={200} alt="HTML5" />                
                <p>JavaScript</p>
              </div>
              <div className="image-with-text">
                <Image src={reactpng} width={200} height={200} alt="HTML5" />                
                <p>React</p>
              </div>
            </div>
          </div>
          <div className="grid-itemtec">
            <h2>Backend</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src={prismapng} width={200} height={200} alt="HTML5" />                
              <p>Prisma</p>
              </div>
              <div className="image-with-text">
              <Image src={phppng} width={200} height={200} alt="HTML5" />                
              <p>PHP</p>
              </div>
              <div className="image-with-text">
              <Image src={nextpng} width={200} height={200} alt="HTML5" />                
              <p>NextJS</p>
              </div>
              <div className="image-with-text">
              <Image src={mysqlpng} width={200} height={200} alt="HTML5" />                
              <p>MySQL</p>
              </div>
              <div className="image-with-text">
              <Image src={nodepng} width={200} height={200} alt="HTML5" />                
              <p>NodeJS</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Extra</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src={swiftpng} width={200} height={200} alt="HTML5" />                
              <p>Swift</p>
              </div>
              <div className="image-with-text">
              <Image src={pythonpng} width={200} height={200} alt="HTML5" />                
              <p>Python</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Tools</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src={terminalpng} width={200} height={200} alt="HTML5" />                
              <p>Terminal</p>
              </div>
              <div className="image-with-text">
              <Image src={vscodepng} width={200} height={200} alt="HTML5" />                
              <p>VS Code</p>
              </div>
              <div className="image-with-text">
              <Image src={gitpng} width={200} height={200} alt="HTML5" />                
              <p>Git</p>
              </div>
              <div className="image-with-text">
              <Image src={githubpng} width={200} height={200} alt="HTML5" />                
              <p>GitHub</p>
              </div>
              <div className="image-with-text">
              <Image src={npm} width={200} height={200} alt="HTML5" />                
              <p>npm</p>
              </div>
            </div>
          </div>

        </div>
      
      </div>
  )
}

export default TecnologiasEN;
