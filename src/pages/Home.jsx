import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Bienvenido al Expediente Médico Electrónico
      </h1>
      <p className="text-gray-600 text-lg mb-4">
        Selecciona una opción para continuar:
      </p>
      <div className="flex space-x-6">
        <Link to="/registrar">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Registrar Paciente
          </button>
        </Link>
        <Link to="/buscar">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Buscar Paciente
          </button>
        </Link>
        <Link to="/imagenes">
          <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            Imágenes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
