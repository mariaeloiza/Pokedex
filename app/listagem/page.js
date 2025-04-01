'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Listagem() {

    const [ pokemons, alteraPokemons ] = useState([])

    async function buscaTodosPokemons(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        alteraPokemons(response.data.results)
    }
    
    useEffect( ()=> {
        buscaTodosPokemons()
    }, [] )

    return ( 
        <div>

            <h1 className=" p-10 mb-10 text-center text-red-700 bg-indigo-50 text-2xl">Lista de Pokémons</h1>

            <div className="px-20">

                <p>Veja quais são todos os Pokémons</p>

                <hr/>

                {
                    pokemons.length > 0 ?
                        <ul>
                            {
                                pokemons.map( (i, index) => 
                                    <li className="flex items-center gap-4" > 
                                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(index+1)+".png"} />
                                        <p> <strong>{index+1}</strong> <br/> {i.name} </p>
                                    </li>
                                )
                            }
                        </ul>
                    :
                        <p>Carregando...</p>

                }

            </div>

        </div>
     
    );
}

export default Listagem;