'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Usuarios() {

    const [ usuarios, alteraUsuarios ] = useState([])

    async function buscaUsuarios(){
        const response = await axios.get("http://localhost:3001/api/usuarios")
        console.log(response)
        alteraUsuarios(response.data)
        
    }

    useEffect(()=> {
        buscaUsuarios()
    }, [])

    return (  
        <div>

            <h1 className=" p-10 mb-10 text-center text-indigo-700 bg-indigo-50 text-2xl">Usuários</h1>
            <p>Estes são os usuários do backend</p>

            <hr/>

            {
                usuarios.map(i => <p>{i.nome}, {i.idade}</p>)

            }

        </div>
    )
}

export default Usuarios;