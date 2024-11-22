import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Formulario = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const correoValido = "juan@gmail.com";
  const passwordValido = "password";

  const validacion = () => {
    if (correo === correoValido && password === passwordValido) {
      navigate("/biblioteca");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  const registro = () => {
    navigate("/registrate");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#A67B5B] ">
      <div className="bg-[#493628] px-4 pt-10 pb-8 w-4/12 rounded-lg">
        <div className="pb-10 ">
          <h1 className="text-4xl text-center text-white">Bienvenido</h1>
        </div>
        <div className="flex flex-col justify-around space-y-4">
          <input
            type="email"
            placeholder="Correo"
            onChange={(e) => setCorreo(e.target.value)}
            className="rounded-lg text-xl p-2 mb-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg text-xl p-2 mb-2"
          />
          <button
            onClick={validacion}
            className="bg-[#A67B5B] rounded-lg text-white text-xl p-2"
          >
            Iniciar Sesión
          </button>
          <div className="text-white text-center">
            ¿Aún no tienes cuenta?
            <button onClick={registro} className="text- underline">
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
