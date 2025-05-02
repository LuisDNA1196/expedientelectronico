import { useEffect, useState } from "react";
import { Link } from "react-router";
import.meta.env.MODE


const ListaPacientes = () => {
  const [expedientes, setExpedientes] = useState([]);

  // Carga de datos desde json-server
  useEffect(() => {
    const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL
    : "/api/expedientes";

  
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setExpedientes(data))
      .catch((err) => console.error("Error al obtener datos:", err));
  }, []);
  

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
            Lista de Pacientes
          </h1>
          <p className="text-gray-600 mt-2">
            Visualiza los datos personales registrados en cada expediente.
          </p>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expedientes.map((exp, idx) => {
            const datos = exp.datos_personales;
            return (
              <li key={idx} className="border rounded-lg shadow-sm">
                <div className="p-4 space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">
                    {datos.nombre} {datos.apellido}
                  </h4>
                  <p className="text-sm text-gray-600">
                    <strong>Edad:</strong> {datos.edad}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Sexo:</strong> {datos.sexo}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Teléfono:</strong> {datos.telefono}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {datos.correo_electronico}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Dirección:</strong> {datos.direccion}
                  </p>
                </div>
                <div className="py-4 px-4 border-t text-right">
                  <Link
                    to={`/expediente/${idx + 1}`}
                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    Ver expediente
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ListaPacientes;
