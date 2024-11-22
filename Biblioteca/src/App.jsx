import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Fourmulario from "./components/Formulario.jsx";
import Biblioteca from "./pages/Biblioteca.jsx";
import Registro from "./pages/Registrate.jsx";
import Perfil from "./pages/Perfil.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fourmulario />}></Route>
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/registrate" element={<Registro />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
