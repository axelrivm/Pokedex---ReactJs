import React, { useState, useEffect } from 'react';

export const Abilities = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1/"
    const [abilities, setAbilities] = useState([])

    const fetchApi = async () => {
      const response = await fetch(url)
      const pokemonJSON = await response.json()
      setAbilities(pokemonJSON.abilities)  
      //console.log({pokemon: pokemonJSON})
      console.log({habilidad: pokemonJSON.abilities})
    }
 
    useEffect(() => {
      fetchApi()
    }, [])

    return(
      <div className="card" style={{width: 240, height: 70}}>
          <div className="card-body">
            <ul>
                {
                  Array.isArray(abilities) ?
                    abilities.map ((item) => (
                      <li key= {item.ability.name} style={{ textTransform: 'uppercase'}}>{item.ability.name}</li>
                  ))
                  : <h1>NO INFO</h1>
                }
              </ul>
          </div>
      </div>
    )
}