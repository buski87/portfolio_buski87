const Projects = () => {
    return (
      <section id="projects" className="text-white bg-black bg-opacity-50 backdrop-blur-md w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold flex items-center">
            <span className="mr-3">💻</span> Proyectos
          </h2>
  
          {/* Proyecto 1 */}
          <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-orange-500">DevNews en Español</h3>
            <p className="text-gray-300 mt-2">
              DevNews en Español es una plataforma que recopila las noticias más importantes del mundo del desarrollo de software,
              las resume y traduce mediante IA, y las publica automáticamente en un blog.
            </p>
  
            {/* Tecnologías usadas */}
            <div className="flex flex-wrap mt-4 space-x-2">
              {["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB", "JWT", "OpenAI", "Material UI", "LinkedIn API"].map((tech) => (
                <span key={tech} className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">{tech}</span>
              ))}
            </div>
  
            {/* Imagen previa */}
            <div className="mt-6">
              <img src="/devnews-preview.jpg" alt="DevNews Preview" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          
        </div>
      </section>
    );
  };
  
  export default Projects;
  