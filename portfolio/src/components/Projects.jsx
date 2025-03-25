const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20
                 bg-white text-black dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-md dark:text-white"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold flex items-center">
          <span className="mr-3">💻</span> Proyectos
        </h2>

        {/* Proyecto BabyMove */}
        <div className="mt-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-start gap-6">
          {/* Imagen más pequeña a la izquierda */}
          <div className="w-full md:w-auto flex-shrink-0">
            <img
              src="/proyectos/babymove-preview.jpg"
              alt="BabyMove Landing Page"
              className="rounded-lg shadow-lg w-full max-w-[150px] md:max-w-[200px]"
            />
          </div>

          {/* Texto y contenido a la derecha */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
              👶 BabyMove – Landing Page
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              BabyMove es una landing page profesional para una tienda de carritos de bebé. 
              Incluye catálogo de productos, filtros, carrito funcional, vista detallada por producto, 
              página de checkout simulada, formulario de contacto vía EmailJS, y diseño responsive.
            </p>

            {/* Tecnologías usadas */}
            <div className="flex flex-wrap mt-4 gap-2">
              {[
                "React",
                "Vite",
                "Tailwind CSS",
                "EmailJS",
                "Framer Motion",
                "LocalStorage",
                "React Router"
              ].map((tech) => (
                <span key={tech} className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlace al proyecto */}
            <div className="mt-4">
              <a
                href="https://babymove-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                🔗 Ver proyecto en línea
              </a>
            </div>
          </div>
        </div>

           {/* Proyecto 2 */}
           <div className="mt-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-start gap-6">
          {/* Imagen más pequeña a la izquierda */}
          <div className="w-full md:w-auto flex-shrink-0">
            <img
              src="/proyectos/babymove-preview.jpg"
              alt="BabyMove Landing Page"
              className="rounded-lg shadow-lg w-full max-w-[150px] md:max-w-[200px]"
            />
          </div>

          {/* Texto y contenido a la derecha */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
               Landing Page
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, non dolor. Natus consectetur ea est non, consequuntur aperiam voluptatibus ipsa soluta necessitatibus, rerum atque corrupti quasi eos ad repellat incidunt?
            </p>

            {/* Tecnologías usadas */}
            <div className="flex flex-wrap mt-4 gap-2">
              {[
                "React",
                "Vite",
                "Tailwind CSS",
                "EmailJS",
                "Framer Motion",
                "LocalStorage",
                "React Router"
              ].map((tech) => (
                <span key={tech} className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlace al proyecto */}
            <div className="mt-4">
              <a
                href="https://babymove-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                🔗 Ver proyecto en línea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
