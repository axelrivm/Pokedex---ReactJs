import React, { useState, useEffect } from 'react';

export const Stats = (props) => {
    const {contador} = props

    const url = `https://pokeapi.co/api/v2/pokemon/${contador}/`
    const [stat, setStats] = useState([])

    const fetchApi = async () => {
      const response = await fetch(url)
      const pokemonJSON = await response.json()
      setStats(pokemonJSON.stats)  
      //console.log({pokemon: pokemonJSON})
      //console.log({STATS: pokemonJSON.stats})
    }
 
    useEffect(() => {
      fetchApi()
    }, [contador])

    return(
        <div className='card' style={{width: 600, height: 300}}>
            <div className='card-body'>
              <ul>
                {
                  Array.isArray(stat) ?
                    stat.map ((item) => (
                      <div>
                      <text style={{ textTransform: 'uppercase'}}>{item.stat.name}:</text>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: item.base_stat}} aria-valuenow={item.base_stat} aria-valuemin="0" aria-valuemax="100">{item.base_stat}</div>
                      </div>
                      </div>
                  ))
                  : <h1>NO INFO</h1>
                }
              </ul>
            </div>
        </div>
    )
}