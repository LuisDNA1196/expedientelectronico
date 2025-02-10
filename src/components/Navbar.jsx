import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      {/* Sección izquierda con los links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-200 transition">Inicio</Link>
        <Link to="/buscar" className="hover:text-gray-200 transition">Pacientes</Link>
        <Link to="/imagenes" className="hover:text-gray-200 transition">Imágenes</Link>
      </div>

      {/* Botón especial de "Registrar Paciente" */}
      <Link to="/registrar">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
          Registrar Paciente
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
