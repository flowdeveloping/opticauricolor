import './App.css';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
         <Routes>
         <Route path='/' exact component={<Inicio/>} />
          </Routes>
        </BrowserRouter> 
      <Inicio/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
