import React, { useState, useEffect } from 'react';

export const InfoPerfil = () => {
    const url = "https://pokeapi.co/api/v2/pokemon-form/1/"
    const url2 = "https://pokeapi.co/api/v2/pokemon/1/"
    const [todo, setTodos] = useState([])
    const [imagen, setImagenes] = useState([]) 

    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos(responseJSON)  
    }

    const fetchImagen = async () => {
        const response = await fetch(url2)
        const responseJSON = await response.json()
        setImagenes(responseJSON.sprites)       
    }

    useEffect( () => {
       fetchApi()
       fetchImagen()
    }, [])
    
    return ( 

        <div className="card" style={{width: 200, height: 300}} align="center">
            <img className="card-img-top" src={imagen.front_default} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">#{todo.id}</h5>
                <text style={{ textTransform: 'uppercase'}}>{todo.name}</text>
            </div>
        </div>
    )
}