const Header = ({ toggleTheme, isDark }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-white bg-opacity-50 backdrop-blur-md shadow-md py-4 px-6 flex items-center justify-between z-50">
      {/* Logo */}
      <a href="#home">
        <img src="/logo.svg" alt="Logo" className="w-64 h-12 shadow-lg" />
      </a>

      {/* Menú */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-blue-400">Inicio</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experiencia</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Proyectos</a></li>
          <li><a href="#about" className="hover:text-blue-400">Sobre mí</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
        </ul>
      </nav>

      {/* Botón modo oscuro/claro */}
      <button 
        onClick={toggleTheme}
        className="ml-4 bg-white dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-md shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        {isDark ? "☀️ Claro" : "🌙 Oscuro"}
      </button>
    </header>
  );
};

export default Header;
