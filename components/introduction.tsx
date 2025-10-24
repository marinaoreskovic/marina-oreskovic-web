const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60 flex items-center justify-center h-screen">
      <div className="items-center justify-center max-w-md  ">
        {/* <Image src="/avatar-1.png" priority width="500" height="500" alt="Avatar" /> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 font-bold text-secondary">
            <br />
            Full Stack Developer
          </h1>
          {/* <p className="mx-auto mb-2 text-xl text-center md:text-xl md:mx-0 md:mb-8">
                    I am passionate about learning new technologies and applying my knowledge to help others achieve their goals.
I am a professional committed to quality and excellence in everything I do.
                    </p> */}
          <p className="mx-auto mb-2 text-xl text-center md:text-xl md:mx-0 md:mb-8">
            Me apasiona desarrollar soluciones tecnológicas que aporten valor real. En cada proyecto priorizo la eficiencia, la calidad y la mejora continua. Soy una profesional comprometida con la calidad y la excelencia en todo lo que hago. 
          </p>
          {/* <p className="mx-auto mb-2 text-xl text-center md:text-xl md:mx-0 md:mb-8">
                    Me apasiona aprender nuevas tecnologías y aplicar mis conocimientos para ayudar a otros a alcanzar sus objetivos. 
                    Soy una profesional comprometida con la calidad y la excelencia en todo lo que hago. 
                    </p> */}

          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start md:gap-10">
            {/* <a href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a> */}
            <a
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
