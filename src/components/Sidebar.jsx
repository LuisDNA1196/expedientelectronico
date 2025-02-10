
const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-200 p-4">
      <ul className="space-y-4">
        <li className="hover:text-blue-500 cursor-pointer">Inicio</li>
        <li className="hover:text-blue-500 cursor-pointer">Expedientes</li>
        <li className="hover:text-blue-500 cursor-pointer">Configuración</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
