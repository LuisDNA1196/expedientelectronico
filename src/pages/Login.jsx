import SecNavBar from "../components/SecNavbar";

const Login = () => {
  return (
    
    <main className="min-h-screen items-center justify-center px-4 py-14">
      <SecNavBar/>
      <div className="max-w-screen-xl w-full text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="max-w-lg space-y-3">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Ingrese usuario y contraseña
            </p>
            <p>Cualquier error contacte al administrador</p>
            <a href="/" className="text-indigo-600 hover:underline">
              Necesito ayuda
            </a>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Contraseña</label>
                <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
             
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Ingresar al Expediente
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
