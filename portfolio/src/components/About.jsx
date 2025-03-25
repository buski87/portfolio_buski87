const About = () => {
  return (
    <section
      id="about" className="w-full min-h-screen flex items-center justify-center text-center px-6 bg-white text-black dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-md dark:text-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold">¡Hola! Soy Pere Busquet</h2>
        <p className="text-xl mt-2">Soy desarrollador Frontend.</p>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Soy un desarrollador web con una trayectoria sólida de más de{" "}
          <span className="text-orange-500 dark:text-orange-400 font-bold">5 años</span>,
          especializándome en la creación y programación de sitios web y estrategias de email marketing.
          He trabajado en equipos y también liderado proyectos personales, desarrollando soluciones robustas,
          escalables y adaptables a móvil que impulsan la innovación.
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.linkedin.com/in/pere-busquet-garcia-cascon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/buski87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="mailto:perebusquet87@gmail.com">
            <img src="/email.svg" alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
