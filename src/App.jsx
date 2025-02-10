import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<h1>Registrar Paciente</h1>} />
          <Route path="/buscar" element={<h1>Buscar Paciente</h1>} />
          <Route path="/imagenes" element={<h1>Sección de Imágenes</h1>} />
        </Routes>
      </div>
    
  );
}

export default App;
