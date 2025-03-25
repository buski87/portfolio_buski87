const Experience = () => {
  return (
    <section id="experience" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white text-black dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-md dark:text-white" >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold flex items-center">
          <span className="mr-3">📂</span> Experiencia Laboral
        </h2>

        {/* Timeline */}
        <div className="mt-8 border-l-4 border-gray-300 dark:border-gray-700 pl-6 space-y-10">
          {/* Trabajo 1 */}
          <div className="relative">
            <span className="absolute -left-3 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-orange-500"></span>
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              &nbsp;&nbsp;&nbsp;&nbsp;2018 - 2024
            </h3>
            <h4 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
              Barcelona Virtual - Front End Developer
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Durante casi 6 años, mis funciones y responsabilidades fueron:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Implementar diseños siguiendo especificaciones de UI/UX.</li>
                <li>Desarrollar landing pages para promociones y lanzamientos.</li>
                <li>Optimizar el rendimiento y la accesibilidad web.</li>
                <li>Escribir código limpio en JS, TS, HTML y CSS.</li>
                <li>Desarrollar UIs interactivas con React y Next.js.</li>
                <li>Trabajar con metodologías ágiles y Git.</li>
                <li>Colaborar con marketing, ventas y atención al cliente.</li>
                <li>Diseñar emails responsivos en MJML/HTML/CSS.</li>
                <li>Integrar herramientas como Mailchimp, Salesforce o Splio.</li>
                <li>Trabajar con bases de datos como MySQL, MongoDB y Firebase.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
