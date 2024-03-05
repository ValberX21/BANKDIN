import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Cadastro from './Components/Cadastro';
import CadastroFinal from './Components/CadastroFinal';
import Home from './Components/Home';

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Components/Cadastro" element={<Cadastro />} />
        <Route path="/Components/Cadastro/Components/CadastroFinal" element={<CadastroFinal />} />
        <Route path="/Components/Cadastro/Components/CadastroFinal/Components/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default MainRoutes;