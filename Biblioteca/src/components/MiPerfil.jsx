import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Componente MiPerfil
 *
 * Este componente obtiene y muestra la información de un usuario aleatorio utilizando la API de randomuser.me.
 *
 * @component
 * @example
 * return (
 *   <MiPerfil />
 * )
 *
 * @returns {JSX.Element} Un componente que muestra la información del perfil del usuario.
 *
 * @typedef {Object} Usuario
 * @property {Object} name - El nombre del usuario.
 * @property {string} name.first - El primer nombre del usuario.
 * @property {string} name.last - El apellido del usuario.
 * @property {string} email - El correo electrónico del usuario.
 * @property {string} cell - El número de celular del usuario.
 * @property {string} gender - El género del usuario.
 * @property {Object} dob - La fecha de nacimiento del usuario.
 * @property {number} dob.age - La edad del usuario.
 * @property {Object} picture - Las imágenes del usuario.
 * @property {string} picture.large - La imagen grande del usuario.
 *
 * @typedef {Object} Error
 * @property {string} message - El mensaje de error.
 *
 * @typedef {Object} Estado
 * @property {Usuario|null} usuario - El usuario obtenido de la API.
 * @property {string} error - El mensaje de error en caso de que ocurra un error.
 * @property {boolean} cargando - Indica si los datos están siendo cargados.
 *
 * @function ObtenerUsuario
 * @description Función asíncrona que obtiene la información de un usuario de la API randomuser.me.
 *
 * @returns {Promise<void>} Una promesa que se resuelve cuando la información del usuario ha sido obtenida.
 */

function MiPerfil() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    ObtenerUsuario();
  }, []);

  const ObtenerUsuario = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUsuario(data.results[0]);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      setError("Error al obtener el usuario");
    } finally {
      setCargando(false);
    }
  };

  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#A67B5B]">
      {usuario && (
        <div class="w-7/12 border-solid border-2 border-gray-600 pt-6 border-opacity-10 rounded overflow-hidden shadow-lg bg-[#493628]">
          <div className="flex justify-center">
            <img
              src={usuario.picture.large}
              alt="imgUsuario"
              className=" min-w-60 rounded-full"
            />
          </div>
          <div>
            <h2 class="font-bold text-xl mb-2 text-center">
              {usuario.name.first} {usuario.name.last}
            </h2>
          </div>
          <div class="grid grid-cols-4 justify-items-center px-6 py-4 text-[#FCFAEE]">
            <div>
              <label className="font-bold">Correo:</label>
              <p class=" text-base">{usuario.email}</p>
            </div>
            <div>
              <label className="font-bold">Celular:</label>
              <p>{usuario.cell}</p>
            </div>
            <div>
              <label className="font-bold">Género:</label>
              <p>{usuario.gender}</p>
            </div>
            <div>
              <label className="font-bold">Edad:</label>
              <p>{usuario.dob.age}</p>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <Link to="/biblioteca" className="rounded px-6 py-2 bg-[#E4E0E1] ">
              Regresar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiPerfil;
