// import { useNavigate } from "react-router-dom";

//dans terminal
//npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Moi from './components/Moi';
import Title from './components/Title';

import Liens from './components/Liens';
import MesLiens from "./components/MesLiens";
import Comp from './components/Comp';
import MesCompetences from './components/MesCompetences';
import Coordonnees from './components/Coodonne';
import MesCoordonne from './components/MesCoordonne';

// import logo from './logo.svg';


function App() {

  // const navigate = useNavigate();
  

  return (
    <div className="App">
        <article className="moiettitre">
          <Moi />
          <Title />
        </article>

        <BrowserRouter>
        <Coordonnees />
        <Liens />
        <Comp />
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/liens" element={<Liens />} />
            <Route path="/mesliens" element={<MesLiens />} />
            <Route path="/comp" element={<Comp />} />
            <Route path="/mescomp" element={<MesCompetences />} />
            <Route path="/coordonne" element={<Coordonnees />} />
            <Route path="/mescoordonnees" element={<MesCoordonne />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
