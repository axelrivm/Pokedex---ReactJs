import './App.css';
import { InfoPerfil } from './components/perfil';
import { Stats } from './components/stats';
import { Abilities } from './components/abilities';
import { Evolution } from './components/evolution';
import {React, useState, useEffect} from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

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
    <div className= 'bg-success'>
      <header>
        <h1 style={{"text-align" : "center"}}>POKEDEX</h1> 
      </header>

      

      <div className='card bg-secondary'>

      <button onClick={restar} className='bg-danger'><BsFillArrowLeftCircleFill /></button>
         <div className='card-body'>
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
         </div>
         <button onClick={Sumar} className='bg-danger'><BsFillArrowRightCircleFill /></button>
      </div>
      
    </div>
  );
}
export default App;
