import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Biblioteca from "../pages/Biblioteca";

const Cabecera = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function cerrarSesion() {
    navigate("/");
  }

  function miPerfil() {
    navigate("/perfil");
  }

  function biblioteca() {
    navigate("/biblioteca");
  }

  return (
    <header className="bg-[#D6C0B3] py-2">
      <div className="flex flex-row justify-between items-center px-11">
        <div>
          <a href="/biblioteca">
            <img
              className="max-w-16"
              src="https://cdn-icons-png.flaticon.com/512/23/23358.png"
              alt=""
            />
          </a>
        </div>
        <h1>
          <Link to="/biblioteca" className="text-2xl">
            Biblioteca Web
          </Link>
        </h1>
        <div className="dropdown" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="text-xl border-solid border-2 border-[#493628] px-6 py-2 rounded-lg bg-[#493628] text-[#DAD3BE] hover:bg-transparent hover:text-[#493628] transition duration-500 ease-in-out"
          >
            Menú
          </button>
          {isOpen && (
            <ul className="dropdown-menu absolute bg-white text-center shadow-lg p-1 w-36">
              <li
                onClick={biblioteca}
                className="p-1  hover:bg-gray-300 cursor-pointer"
              >
                Biblioteca
              </li>
              <li
                onClick={miPerfil}
                className="p-1  hover:bg-gray-300 cursor-pointer"
              >
                Mi perfil
              </li>
              <li
                onClick={cerrarSesion}
                className="p-1 text-red-500 hover:bg-gray-300 cursor-pointer"
              >
                Cerrar Sesión
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cabecera;
