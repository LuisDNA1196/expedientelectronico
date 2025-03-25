
const SecNavBar = () => {

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 mb-10 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <p className="text-2xl font-bold text-gray-800 tracking-wide">
              Expediente Médico
            </p>
          </a>
          
        </div>

        <div className=" md:inline-block ml-auto">
          <a
            href="javascript:void(0)"
            className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
          >
            Conocenos
          </a>
        </div>
      </div>
    </nav>
  );
};
export default SecNavBar;
