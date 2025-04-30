import Image from 'next/image';

const TecnologiasEN = () => {
  return (
    <div className="lenguajes">
        <h2>TECHNOLOGIES</h2>

        <div className="grid-containertec">
          <div className="grid-itemtec">
            <h2>Frontend</h2>
             <div className="tecnologias">
              <div className="image-with-text">
              <Image src="/icons/html5.png" width={200} height={200} alt="HTML5" />                
              <p>HTML</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/css3.png" width={200} height={200} alt="HTML5" />                
              <p>CSS</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/js.png" width={200} height={200} alt="HTML5" />                
                <p>JavaScript</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/reactn.png" width={200} height={200} alt="HTML5" />                
                <p>React</p>
              </div>
            </div>
          </div>
          <div className="grid-itemtec">
            <h2>Backend</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src="/icons/prisma.png" width={200} height={200} alt="HTML5" />                
              <p>Prisma</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/php.png" width={200} height={200} alt="HTML5" />                
              <p>PHP</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/nextjs.png" width={200} height={200} alt="HTML5" />                
              <p>NextJS</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/mysql.png" width={200} height={200} alt="HTML5" />                
              <p>MySQL</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/nodejs.png" width={200} height={200} alt="HTML5" />                
              <p>NodeJS</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Extra</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src="/icons/swift.png" width={200} height={200} alt="HTML5" />                
              <p>Swift</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/python.png" width={200} height={200} alt="HTML5" />                
              <p>Python</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Tools</h2>
            <div className="tecnologias">
              <div className="image-with-text">
              <Image src="/icons/terminal.png" width={200} height={200} alt="HTML5" />                
              <p>Terminal</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/vscode.png" width={200} height={200} alt="HTML5" />                
              <p>VS Code</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/git.png" width={200} height={200} alt="HTML5" />                
              <p>Git</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/github.png" width={200} height={200} alt="HTML5" />                
              <p>GitHub</p>
              </div>
              <div className="image-with-text">
              <Image src="/icons/npm.png" width={200} height={200} alt="HTML5" />                
              <p>npm</p>
              </div>
            </div>
          </div>

        </div>
      
      </div>
  )
}

export default TecnologiasEN;
