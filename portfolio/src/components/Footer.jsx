const Footer = () => {
    return (
      <footer className="w-full bg-black bg-opacity-50 backdrop-blur-md py-6 text-center text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} - Pere Busquet - Todos los derechos reservados.
          </p>
  
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="hover:text-white">Sobre mí</a>
            <a href="#contact" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  