const Footer = () => {
  return (
    <footer className="w-full py-6 text-center bg-white text-black dark:bg-black dark:bg-opacity-50 dark:text-gray-400 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} - Buski87 - Todos los derechos reservados.
        </p>

        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-white">Sobre mí</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-white">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
