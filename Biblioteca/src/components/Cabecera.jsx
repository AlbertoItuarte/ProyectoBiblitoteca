import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cabecera = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function holaMundo() {
    alert("Hola Mundo");
  }

  function cerrarSesion() {
    navigate("/");
  }

  function miPerfil() {
    navigate("/perfil");
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
            <ul className="dropdown-menu absolute bg-[#D6C0B3] text-[#493628] text-center">
              <li className="dropdown-item rounded-lg">
                <Link to="/biblioteca" className="">
                  Biblioteca
                </Link>
              </li>
              <li className="dropdown-item rounded-lg" onClick={miPerfil}>
                Mi perfil
              </li>
              <li
                className="dropdown-item rounded-lg"
                style={{ color: "#0066FF" }}
              >
                <button onClick={cerrarSesion}>Cerrar Sesión</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cabecera;
