import { Link } from "react-router-dom";
import Cabecera from "../components/Cabecera";
import BuscarLibros from "../components/BuscarLibros";

function Biblioteca() {
  return (
    <section className="bibliotecaContainer">
      <div className="p-auto">
        <Cabecera />
      </div>
      <div className="mt-28">
        <BuscarLibros />
      </div>
    </section>
  );
}

export default Biblioteca;
