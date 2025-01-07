import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header.js';
import Introduccion from './Introduccion.js';
import Plantas from './Plantas';
import PlantDetail from './PlantDetail';
import BaseDeDatos from './Basedatos';

function App() {
  return (
    <Router>
      <div className="App">

        {/* Incluir el header aquí */}
        <Header />

        {/* Body para contenido dinámico */}
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Introduccion />} />
            <Route path="/plantas" element={<Plantas />} />
            <Route path="/planta/:id_planta" element={<PlantDetail />} />
            <Route path="/base-de-datos" element={<BaseDeDatos />} />
          </Routes>
        </Container>
        
      </div>
    </Router>
  );
}

export default App;