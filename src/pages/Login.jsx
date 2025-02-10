
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" className="border p-2 my-2 w-full" />
        <input type="password" placeholder="Contraseña" className="border p-2 my-2 w-full" />
        <button className="bg-blue-600 text-white p-2 w-full">Entrar</button>
      </div>
    </div>
  );
};

export default Login;
