import './App.css';
import { InfoPerfil } from './components/perfil';
import { Stats } from './components/stats';
import { Abilities } from './components/abilities';
import { Evolution } from './components/evolution';
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1 style={{"text-align" : "center"}}>POKEDEX</h1> 
      </header>

      
      <div className='container'>
         <div className='row'>
            <div className='col'>
               <InfoPerfil/>
            </div>
            <div className='col'>
               <Stats/>
            </div>
            <div className='col'>
               <Abilities/>
            </div>
         </div>
      </div>

    </div>
  );
}
export default App;
