import './App.css';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productos' element={<Productos />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
