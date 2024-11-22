import { useState, useEffect } from "react";

const BuscarLibros = () => {
  const [query, setQuery] = useState("");
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const SearchBooks = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setLibros(data.docs);
    } catch (error) {
      alert("Error al buscar los libros:", error);
    } finally {
      setLoading(false);
    }
  };

  const limpiar = () => {
    setLibros([]);
    setQuery("");
  };

  return (
    <div className="pt-6 h-screen w-full bg-[#A67B5B] ">
      <div className="w-3/12 rounded-xl  bg-[#493628] pb-4 mx-auto">
        <div className="flex justify-center py-3">
          <label htmlFor="" className="text-white text-center">
            Buscador de libros:
          </label>
        </div>

        <div className="flex justify-around ">
          <input
            type="text"
            placeholder="Escribe el título o el autor del libro"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-8/12 rounded-xl px-4 text-center bg-[#DAD3BE] placeholder:text-black placeholder:text-opacity-50"
          />

          <button
            onClick={SearchBooks}
            className="px-8 py-2 rounded-lg border-solid border-2 border-[#E4E0E1] bg-[#E4E0E1] hover:bg- hover:text-[#914F1E] transition duration-500 ease-in-out"
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="justify-self-center w-4/5 pt-4">
        {loading && <p className="font-bold text-white">Cargando...</p>}
        {libros.length > 0 && (
          <button onClick={limpiar} className="text-white">
            Limpiar busqueda 🧹
          </button>
        )}

        {libros.length > 0 && (
          <div className="h-[calc(80vh-70px)] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x</div>l:grid-cols-4 gap-4">
              {libros.map((libro, index) => (
                <li
                  key={libro.key || index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
                >
                  <button>
                    <div className="p-5 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                          {libro.title}
                        </h3>
                        <p className="text-sm text-gray-600 italic">
                          {libro.author_name?.join(", ") || "Autor desconocido"}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuscarLibros;
