import './App.css';
import { InfoPerfil } from './components/perfil';
import { Stats } from './components/stats';
import { Abilities } from './components/abilities';
import { Evolution } from './components/evolution';
import  {React, useState, useEffect} from 'react';

function App() {

   const [cont, setCont] = useState(1);
   const Sumar = () => {
      setCont(cont+1);
   }
   const restar = () => {
      setCont(cont-1);
   }

   console.log(cont)

  return (
    <div>
      <header>
        <h1 style={{"text-align" : "center"}}>POKEDEX</h1> 
      </header>
      
      <div className='container'>
         <button onClick={restar}>Antes</button>
         <div className='row'>
            <div className='col'>
               <InfoPerfil contador={cont}/>
            </div>
            <div className='col'>
               <Stats contador={cont}/>
            </div>
            <div className='col'>
               <Abilities contador={cont}/>
            </div>
         </div>
         <button onClick={Sumar}>Next</button>
      </div>
    </div>
  );
}
export default App;
