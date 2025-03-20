import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md py-4 px-6 flex items-center justify-between z-50">
      {/* Logo redondo en la izquierda */}
      <a href="#home">
        <img src="/logo.svg" alt="Logo" className="w-64 h-12  shadow-lg" />
      </a>

      {/* Menú de navegación centrado */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-8 text-white text-lg">
          <li><a href="#home" className="hover:text-blue-400">Inicio</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experiencia</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Proyectos</a></li>
          <li><a href="#about" className="hover:text-blue-400">Sobre mí</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
        </ul>
      </nav>

      {/* Botón Dark Mode */}
      <button 
        onClick={toggleDarkMode} 
        className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
};

export default Header;