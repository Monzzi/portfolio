import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MonzziDev</h1>

        {/* Botón del menú en móvil */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menú */}
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <a href="#" className="hover:underline">Inicio</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Proyectos</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
