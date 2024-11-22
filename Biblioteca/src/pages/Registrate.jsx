import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  function biblioteca() {
    if (nombre && email && password) {
      navigate("/biblioteca");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#A67B5B]">
      <div className="bg-[#493628] px-4 pt-10 pb-8 w-4/12 rounded-lg">
        <div className="pb-10">
          <h2 className="text-4xl text-center text-white">Registro</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around space-y-4"
        >
          <label htmlFor="" className="text-white text-2xl">
            Nombre:
          </label>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="rounded-lg text-xl p-2 mb-2"
          />
          <label htmlFor="" className="text-white text-2xl">
            Correo:
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg text-xl p-2 mb-2"
          />
          <label htmlFor="" className="text-white text-2xl">
            Contraseña:
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg text-xl p-2 mb-2"
          />
          <button
            type="submit"
            className="bg-[#A67B5B] rounded-lg text-white text-xl p-2"
            onClick={biblioteca}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
