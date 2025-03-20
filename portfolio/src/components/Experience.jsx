const Experience = () => {
    return (
      <section id="experience" className="text-white bg-black bg-opacity-50 backdrop-blur-md w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold flex items-center">
            <span className="mr-3">📂</span> Experiencia Laboral
          </h2>
  
          {/* Timeline */}
          <div className="mt-8 border-l-4 border-gray-700 pl-6 space-y-10">
            
            {/* Trabajo 1 */}
            <div className="relative">
              <span className="absolute -left-3 w-6 h-6 bg-white rounded-full border-4 border-orange-500"></span>
              <h3 className="text-lg font-semibold text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;2018 - 2024</h3>
              <h4 className="text-2xl font-bold text-orange-500">Barcelona Virtual - Front End Developer</h4>
              <p className="text-gray-300 mt-2">
                Durante casi 6 años, mis funciones y responsabilidades fueron:
                <ul>
                    <li>
                    Implementar diseños siguiendo especificaciones de UI/UX, garantizando una experiencia de usuario fluida.
                    </li>
                    <li>
                    Desarrollar landing pages para distintos sitios web, enfocadas en promociones eventuales, lanzamientos de productos y sorteos, optimizando la conversión y captación de leads. 
                    </li>
                    <li>
                    Optimizar el rendimiento y la accesibilidad de aplicaciones y páginas web.
                    </li>
                    <li>
                    Escribir código limpio, modular y reutilizable utilizando JavaScript, TypeScript, HTML y CSS (Tailwind, SCSS, Bootstrap).
                    </li>
                    <li>
                    Crear interfaces de usuario interactivas y responsivas con React.js y Next.js.
                    </li>
                    <li>
                    Colaborar con diseñadores, desarrolladores backend y equipos de producto para definir y mejorar funcionalidades.
                    </li>
                    <li>
                    Aplicar metodologías ágiles (Scrum) y utilizar herramientas de control de versiones como Git y GitHub/GitLab.
                    </li>
                    <li>
                    Coordinarse con otros departamentos, como marketing, ventas y atención al cliente, para garantizar que las soluciones digitales cumplan con los objetivos del negocio.
                    </li>
                    <li>
                    Recoger y analizar requerimientos de diferentes departamentos para optimizar funcionalidades y mejorar la experiencia del usuario.
                    </li>
                    <li>
                    Diseñar y desarrollar plantillas de email responsivas con HTML, CSS y MJML.
                    </li>
                    <li>
                    Integrar campañas de email marketing con herramientas como Mailchimp, Selligent, Salesforce o Splio.
                    </li>
                    <li>
                    Implementar formularios de suscripción y estrategias de automatización para captación de leads.
                    </li>
                    <li>
                    Gestionar bases de datos de clientes y usuarios en MySQL, MongoDB o Firebase, asegurando la integridad y optimización de los datos.
                    </li>
                    <li>
                    Desarrollar y optimizar consultas SQL para la extracción y análisis de datos.
                    </li>
                    <li>
                    Implementar integraciones entre la web y plataformas de CRM como HubSpot, Salesforce o Selligent para la segmentación y personalización de campañas.
                    </li>
                    <li>
                    Trabajar con el equipo de marketing y ventas para definir estrategias basadas en datos y optimizar las conversiones.
                    </li>
                </ul>
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  