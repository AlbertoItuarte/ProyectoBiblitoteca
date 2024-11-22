import React, { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center ">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <h2 className="text-3xl">Registro</h2>
        </div>
        <div className="p-2">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="border-solid border-2 border-gray-300 rounded-lg w-full"
          />
        </div>
        <div className="p-2">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-solid border-2 border-gray-300 rounded-lg w-full"
          />
        </div>
        <div className="p-2">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-solid border-2 border-gray-300 rounded-lg w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="hover:bg-black hover:text-white p-1.5 rounded-lf border-solid border-2 border-gray-300 rounded-lg px-1.5"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registro;
