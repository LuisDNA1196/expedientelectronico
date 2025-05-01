import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

const ExpedienteDetalle = () => {
  const { id } = useParams();
  const [expediente, setExpediente] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/expedientes_medicos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Expediente no encontrado");
        }
        return res.json();
      })
      .then((data) => setExpediente(data))
      .catch((err) => {
        console.error("Error al obtener el expediente:", err);
        setError(true);
      });
  }, [id]);

  if (error) return <div className="p-4 text-red-600">Expediente no encontrado.</div>;
  if (!expediente) return <div className="p-4">Cargando...</div>;

  const {
    datos_personales,
    antecedentes,
    motivo_de_consulta,
    signos_y_sintomas,
    exploracion_fisica,
    diagnostico_presuntivo,
    plan_diagnostico,
    tratamiento,
    nota_medica,
    fecha_consulta,
    medico_responsable
  } = expediente;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link to="/" className="text-indigo-600 hover:underline">← Volver</Link>
      <h1 className="text-2xl font-bold text-gray-800">
        {datos_personales.nombre} {datos_personales.apellido}
      </h1>
      <p className="text-gray-600">Edad: {datos_personales.edad} años</p>
      <p className="text-gray-600">Sexo: {datos_personales.sexo}</p>
      <p className="text-gray-600">Fecha de nacimiento: {datos_personales.fecha_nacimiento}</p>
      <p className="text-gray-600">Teléfono: {datos_personales.telefono}</p>
      <p className="text-gray-600">Correo: {datos_personales.correo_electronico}</p>
      <p className="text-gray-600">Dirección: {datos_personales.direccion}</p>

      <div>
        <h2 className="text-xl font-semibold mt-4">Antecedentes</h2>
        <p><strong>Patológicos:</strong> {antecedentes.personales_patologicos.join(", ")}</p>
        <p><strong>No patológicos:</strong> {antecedentes.personales_no_patologicos.join(", ")}</p>
        <p><strong>Heredofamiliares:</strong> {antecedentes.heredofamiliares.join(", ")}</p>
        <p><strong>Alergias:</strong> {antecedentes.alergias.join(", ")}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Motivo de consulta</h2>
        <p>{motivo_de_consulta}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Signos y síntomas</h2>
        <ul className="list-disc list-inside">
          {signos_y_sintomas.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Exploración física</h2>
        <p><strong>Frecuencia cardíaca:</strong> {exploracion_fisica.signos_vitales.frecuencia_cardiaca}</p>
        <p><strong>Presión arterial:</strong> {exploracion_fisica.signos_vitales.presion_arterial}</p>
        <p><strong>Temperatura:</strong> {exploracion_fisica.signos_vitales.temperatura}</p>
        <p><strong>Frecuencia respiratoria:</strong> {exploracion_fisica.signos_vitales.frecuencia_respiratoria}</p>
        <p><strong>Saturación de oxígeno:</strong> {exploracion_fisica.signos_vitales.saturacion_oxigeno}</p>
        {exploracion_fisica.hallazgos && Object.entries(exploracion_fisica.hallazgos).map(([clave, valor]) => (
          <p key={clave}><strong>{clave}:</strong> {valor}</p>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Diagnóstico presuntivo</h2>
        <ul className="list-disc list-inside">
          {diagnostico_presuntivo.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Plan diagnóstico</h2>
        <ul className="list-disc list-inside">
          {plan_diagnostico.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Tratamiento</h2>
        <ul className="list-disc list-inside">
          {tratamiento.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Nota médica</h2>
        <p>{nota_medica}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Consulta</h2>
        <p><strong>Fecha:</strong> {new Date(fecha_consulta).toLocaleString()}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Médico responsable</h2>
        <p><strong>Nombre:</strong> {medico_responsable.nombre}</p>
        <p><strong>Cédula profesional:</strong> {medico_responsable.cedula_profesional}</p>
        <p><strong>Especialidad:</strong> {medico_responsable.especialidad}</p>
      </div>
    </div>
  );
};

export default ExpedienteDetalle;
