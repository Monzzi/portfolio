import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Detectar scroll para cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById("mobile-menu");
      if (isOpen && nav && !nav.contains(event.target) && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-sm shadow-lg py-2" 
          : "bg-primary py-4"
      } text-white px-6`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="h-8 w-8 bg-background rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-lg">M</span>
          </div>
          
          <h1 className="text-2xl font-bold">
            <span className="text-white">Monzzi</span>
            <span className="text-accent">Dev</span>
          </h1>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          {["inicio", "proyectos", "contacto"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className={`hover:text-accent transition-colors py-2 relative ${
                  activeSection === item 
                    ? "text-accent font-medium" 
                    : ""
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón del menú en móvil */}
        <button
          className="md:hidden text-white focus:outline-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú Móvil */}
      <div 
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen 
            ? "max-h-96 opacity-100 py-4" 
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-2">
          {["inicio", "proyectos", "contacto"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className={`block py-2 px-4 hover:bg-secondary rounded transition-colors ${
                  activeSection === item 
                    ? "bg-secondary/50 font-medium" 
                    : ""
                }`}
                onClick={() => {
                  setActiveSection(item);
                  setIsOpen(false);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;