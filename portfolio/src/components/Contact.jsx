import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20
                 bg-white text-black dark:bg-black dark:text-white dark:bg-opacity-50 dark:backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold mb-4">📬 Contacto</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
        Si estás interesado en colaborar, tienes alguna propuesta o simplemente quieres saludar, 
        ¡no dudes en contactarme!
      </p>

      <div className="flex space-x-10 text-4xl">
        <a
          href="https://www.linkedin.com/in/pere-busquet-garcia-cascon/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/buski87"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:perebusquet87@gmail.com"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
