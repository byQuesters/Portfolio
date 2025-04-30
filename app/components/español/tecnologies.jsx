import Image from 'next/image';

const Tecnologias = () => {
  return (
    <div className="lenguajes">
        <h2>TECNOLOGIAS</h2>

        <div className="grid-containertec">
          <div className="grid-itemtec">
            <h2>Frontend</h2>
             <div className="tecnologias">
              <div className="image-with-text">
                <Image src="/icons/html5.png" width={200} height={200} alt="HTML5" />                
                <p>HTML</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/css3.png" width={200} height={200} alt="" />
                <p>CSS</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/js.png" width={200} height={200} alt="" />
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
                <Image src="/icons/prisma.png" width={200} height={200} alt="" />
                <p>Prisma</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/php.png" width={200} height={200} alt="" />
                <p>PHP</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/nextjs.png" width={200} height={200} alt="" />
                <p>NextJS</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/mysql.png" width={200} height={200} alt="" />
                <p>MySQL</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/nodejs.png" width={200} height={200} alt="" />
                <p>NodeJS</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Extras</h2>
            <div className="tecnologias">
              <div className="image-with-text">
                <Image src="/icons/swift.png" width={200} height={200} alt="" />
                <p>Swift</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/python.png" width={200} height={200} alt="" />
                <p>Python</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Herramientas</h2>
            <div className="tecnologias">
              <div className="image-with-text">
                <Image src="/icons/terminal.png" width={200} height={200} alt="" />
                <p>Terminal</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/vscode.png" width={200} height={200} alt="" />
                <p>VS Code</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/git.png" width={200} height={200} alt="" />
                <p>Git</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/github.png" width={200} height={200} alt="" />
                <p>GitHub</p>
              </div>
              <div className="image-with-text">
                <Image src="/icons/npm.png" width={200} height={200} alt="" />
                <p>npm</p>
              </div>
            </div>

          </div>

        </div>
      
      </div>
  )
}

export default Tecnologias;