import React, { useState, useEffect } from 'react';

export const Evolution = () => {
    const url = "https://pokeapi.co/api/v2/evolution-chain/1/"
    const [evolution, setEvolutions] = useState([])

    const fetchApi = async () => {
      const response = await fetch(url)
      const evolutionJSON = await response.json()
      setEvolutions(evolutionJSON.chain.evolves_to)  
      
    }
 
    useEffect(() => {
      fetchApi()
    }, [])

    return(
        <div>
            <ul>
              {
                Array.isArray(evolution) ?
                    evolution.map ((item) => (
                    <li key= {item.species.name}>{item.species.name} </li>
                ))
                : <h1>NO INFO</h1>
              }
            </ul>
        </div>
    )
}