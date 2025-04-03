'use client'

import axios from "axios";
import { useEffect } from "react";

function Usuarios() {

    async function buscaUsuarios(){
        const response = await axios.get("http://localhost:3000/api/usuarios")
        console.log(response)
    }

    useEffect(()=> {
        buscaUsuarios()
    }, [])

    return (  
        <div>

            <h1 className=" p-10 mb-10 text-center text-indigo-700 bg-indigo-50 text-2xl">Usuários</h1>
            <p>Estes são os usuários do backend</p>

            <hr/>



        </div>
    )
}

export default Usuarios;