import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

const ExpedienteDetalle = () => {
  const { id } = useParams();
  const [expediente, setExpediente] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/expedientes_medicos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Expediente no encontrado");
        return res.json();
      })
      .then((data) => setExpediente(data))
      .catch((err) => {
        console.error("Error al obtener el expediente:", err);
        setError(true);
      });
  }, [id]);

  if (error)
    return <div className="p-6 text-red-600 text-center text-lg">⚠️ Expediente no encontrado.</div>;

  if (!expediente)
    return <div className="p-6 text-gray-600 text-center text-lg">Cargando expediente...</div>;

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
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      <Link to="/pacientes" className="inline-block text-indigo-600 hover:text-indigo-800 transition text-sm mb-4">
        ← Volver a la lista
      </Link>

      <div className="bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {datos_personales.nombre} {datos_personales.apellido}
        </h1>
        <p className="text-gray-600 mb-1">Edad: <strong>{datos_personales.edad}</strong> años</p>
        <p className="text-gray-600 mb-1">Sexo: {datos_personales.sexo}</p>
        <p className="text-gray-600 mb-1">Nacimiento: {datos_personales.fecha_nacimiento}</p>
        <p className="text-gray-600 mb-1">📞 {datos_personales.telefono}</p>
        <p className="text-gray-600 mb-1">📧 {datos_personales.correo_electronico}</p>
        <p className="text-gray-600">🏠 {datos_personales.direccion}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Antecedentes">
          <p><strong>Patológicos:</strong> {antecedentes.personales_patologicos.join(", ")}</p>
          <p><strong>No patológicos:</strong> {antecedentes.personales_no_patologicos.join(", ")}</p>
          <p><strong>Heredofamiliares:</strong> {antecedentes.heredofamiliares.join(", ")}</p>
          <p><strong>Alergias:</strong> {antecedentes.alergias.join(", ")}</p>
        </Card>

        <Card title="Exploración física">
          {Object.entries(exploracion_fisica.signos_vitales).map(([key, val]) => (
            <p key={key}><strong>{formatoTexto(key)}:</strong> {val}</p>
          ))}
          {exploracion_fisica.hallazgos &&
            Object.entries(exploracion_fisica.hallazgos).map(([key, val]) => (
              <p key={key}><strong>{formatoTexto(key)}:</strong> {val}</p>
            ))}
        </Card>

        <Card title="Motivo de consulta">
          <p>{motivo_de_consulta}</p>
        </Card>

        <Card title="Signos y síntomas">
          <ul className="list-disc pl-5 text-gray-700">
            {signos_y_sintomas.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </Card>

        <Card title="Diagnóstico presuntivo">
          <ul className="list-disc pl-5 text-gray-700">
            {diagnostico_presuntivo.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </Card>

        <Card title="Plan diagnóstico">
          <ul className="list-disc pl-5 text-gray-700">
            {plan_diagnostico.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </Card>

        <Card title="Tratamiento">
          <ul className="list-disc pl-5 text-gray-700">
            {tratamiento.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </Card>

        <Card title="Nota médica">
          <p className="text-gray-700">{nota_medica}</p>
        </Card>

        <Card title="Consulta">
          <p><strong>Fecha:</strong> {new Date(fecha_consulta).toLocaleString()}</p>
        </Card>

        <Card title="Médico responsable">
          <p><strong>Nombre:</strong> {medico_responsable.nombre}</p>
          <p><strong>Cédula:</strong> {medico_responsable.cedula_profesional}</p>
          <p><strong>Especialidad:</strong> {medico_responsable.especialidad}</p>
        </Card>
      </div>
    </div>
  );
};

// Reusable card component
const Card = ({ title, children }) => (
  <div className="bg-white shadow rounded-lg p-5 space-y-2">
    <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
    {children}
  </div>
);

// Capitaliza claves como "frecuencia_respiratoria"
const formatoTexto = (texto) =>
  texto.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export default ExpedienteDetalle;
