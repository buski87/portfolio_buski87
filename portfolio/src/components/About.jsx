import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
const About = () => {
  return (
    <section
      id="about" className="w-full min-h-screen flex items-center justify-center text-center px-6 bg-white text-black dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-md dark:text-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold">¡Hola! Soy Pere Busquet</h2>
        <p className="text-xl mt-2">Desarrollador Frontend.</p>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
        Soy un desarrollador web con una trayectoria sólida de más de <span className="text-orange-500 dark:text-orange-400 font-bold">5 años</span>, especializándome en la creación y programación de sitios web y estrategias de email marketing. Mi experiencia abarca una amplia gama de proyectos, donde he colaborado eficazmente con equipos de desarrolladores, así como también he liderado iniciativas personales. Tengo habilidad para desarrollar páginas web robustas, escalables y adaptables a dispositivos móviles, gestionando tanto el front-end como el back-end, ofreciendo soluciones tecnológicas que impulsan la innovación y el éxito.
        </p>
      </div>
    </section>
  );
};

export default About;
