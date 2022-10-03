import React,{Fragment} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto  from './components/Contacto';

function App() {

  
  //console.log(inicio)
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros  />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/contacto" element={<Contacto />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
