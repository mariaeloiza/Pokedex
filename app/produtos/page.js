'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Produtos() {

    const [ produtos, alteraProdutos ] = useState([])

    async function buscaProdutos(){
        const response = await axios.get("http://localhost:3001/api/produtos")
        console.log(response)
        alteraProdutos(response.data)
        
    }

    useEffect(()=> {
        buscaProdutos()
    }, [])

    return (  
        <div>

            <h1 className=" p-10 mb-10 text-center text-indigo-700 bg-indigo-50 text-2xl">Produtos</h1>
            <p>Estes são os produtos do backend</p>

            <hr/>

            {
                produtos.map(i => <p className="border p-3 m-3">
                    <strong>{i.nome}</strong> - R${i.preco.toFixed(2)} <br/> Quantidade: {i.quantidade},  Registro: {i.registro}
                </p>)

            }

        </div>
    )
}

export default Produtos;