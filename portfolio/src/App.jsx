import { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains("dark") ? "light" : "dark";

    html.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
