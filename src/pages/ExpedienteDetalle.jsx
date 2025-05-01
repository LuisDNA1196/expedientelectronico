import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

const ExpedienteDetalle = () => {
  const { id } = useParams();
  const [expediente, setExpediente] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/expedientes_medicos/${id}`)
      .then((res) => res.json())
      .then((data) => setExpediente(data))
      .catch((err) => console.error("Error al obtener el expediente:", err));
  }, [id]);

  if (!expediente) return <div className="p-4">Cargando...</div>;

  const { datos_personales, motivo_de_consulta, diagnostico_presuntivo, tratamiento, medico_responsable } = expediente;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/" className="text-indigo-600 hover:underline">← Volver</Link>
      <h1 className="text-2xl font-bold mt-4">{datos_personales.nombre} {datos_personales.apellido}</h1>
      <p className="text-gray-600 mt-2">Edad: {datos_personales.edad} años</p>
      <p className="text-gray-600">Teléfono: {datos_personales.telefono}</p>
      <p className="text-gray-600">Correo: {datos_personales.correo_electronico}</p>
      <p className="mt-4"><strong>Motivo de consulta:</strong> {motivo_de_consulta}</p>
      <p><strong>Diagnóstico:</strong> {diagnostico_presuntivo.join(', ')}</p>
      <p><strong>Tratamiento:</strong> {tratamiento.join(', ')}</p>
      <p className="mt-4"><strong>Médico Responsable:</strong> {medico_responsable.nombre}</p>
    </div>
  );
};

export default ExpedienteDetalle;
