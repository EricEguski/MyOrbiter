import { Component } from 'react';
import './assets/css/app.css';
import Arcontes from './components/Api/Arcontes';
import Cambion from './components/Api/Cambion';
import Cetus from './components/Api/Cetus';

function App() {
  return (
    <div className='contenedor d-flex align-items-center justify-content-center'>

      <div className='col-8 miGrid'>

        < Arcontes/>
        < Cambion/>
        < Cetus/>
        
      </div>   
    </div>

  );
}

export default App;
