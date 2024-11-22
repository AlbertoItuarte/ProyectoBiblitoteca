import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./components.css";

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

  return (
    <div className="formulario">
      <div className="bienvenida">
        <h1
          style={{
            fontSize: "2rem",
            padding: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          ¡Bienvenido amigo lector!
        </h1>
      </div>
      <div className="container-form">
        <input
          style={{
            border: "1px solid #000",
            padding: "10px",
            borderRadius: "5px",
          }}
          type="email"
          placeholder="Correo"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          style={{
            border: "1px solid #000",
            padding: "10px",
            borderRadius: "5px",
          }}
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            border: "1px solid #A8A8A8",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#04A309",
          }}
          onClick={validacion}
        >
          Iniciar Sesión
        </button>
        <div style={{ marginTop: "20px" }}>
          <Link to="/registrate" style={{ color: "#04A309" }}>
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
