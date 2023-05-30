import './App.css';
import { InfoPerfil } from './components/perfil';
import { Stats } from './components/stats';
import { Abilities } from './components/abilities';
import {React, useState} from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import logo from './assets/img/pokedex.png';
import fondo from './assets/img/fondo2.jpg';

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
    <div style={{backgroundImage: `url(${fondo})`, display: 'block'}}>

      <div >
         <img src={logo} alt="logo" className="rounded mx-auto d-block"/>
      </div>
      
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
