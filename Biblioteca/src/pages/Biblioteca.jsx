import Cabecera from "../components/Cabecera";
import BuscarLibros from "../components/BuscarLibros";

function Biblioteca() {
  return (
    <section>
      <div className="">
        <Cabecera />
      </div>
      <div className="">
        <BuscarLibros />
      </div>
    </section>
  );
}

export default Biblioteca;
