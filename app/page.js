'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {

    const [ pokemons, alteraPokemons ] = useState({})
    const [ pesquisa, alteraPesquisa ] = useState("")

    async function buscaPokemon(){
       const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa)
       alteraPokemons(response.data)
    }

    async function buscaProximo( proximo ){
        const proximoId = parseInt(pokemons.id) + (proximo == true ? 1 : -1)
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+proximoId)
        alteraPokemons(response.data)   
    }

    return (
        <div>

            <h1 className=" p-10 mb-10 text-center text-indigo-700 bg-indigo-50 text-2xl">Pokédex</h1>

            <div className="px-20">
                <p>Os melhores Pokémons estão aqui</p>

                <hr/>

                <form onSubmit={ (e)=> { e.preventDefault(); buscaPokemon() } } >
                    <p>Digite o nome de um Pokémon:</p>
                    <input onChange={ (e)=> alteraPesquisa(e.target.value) } className="border my-5" />
                    <br/>
                    <button className="p-3 bg-blue-500 text-indigo-50 mb-10 rounded-xl">Pesquisar</button>
                </form>

                {
                    pokemons.id ?
                        <div>
                            <img src={pokemons.sprites.other.showdown.front_default} />
                            <h2> {pokemons.name} </h2>
                            <p> {pokemons.types[0].type.name} </p>
                            <button onClick={(e)=> buscaProximo(false)} className="p-3 bg-blue-300 text-indigo-50 mb-10 rounded-xl" >Anterior</button>
                            <button onClick={(e)=> buscaProximo(true)} className="p-3 m-1 bg-blue-300 text-indigo-50 mb-10 rounded-xl" >Próximo</button>
                        </div>
                    :
                        <p> Carregando... </p>
                }

            </div>
            
        </div>
    );
}
