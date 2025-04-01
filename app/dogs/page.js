'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Dogs() {

    const [ dogs, alteraDogs ] = useState([])

    async function buscaTodosDogs(){
        const response = await axios.get("https://dog.ceo/api/breed/hound/images")
        console.log(response)
        alteraDogs(response.data.message)
    }
    
    useEffect( ()=> {
        buscaTodosDogs()
    }, [] )

    return ( 
        <div>

            <h1 className=" p-10 mb-10 text-center text-green-700 bg-indigo-50 text-2xl">Lista de Doguinhos</h1>

            <div className="px-20">

                <p>Os melhores hotdogs estão aqui</p>

                <hr/>

                {
                    dogs.length >= 0 ?
                        <ul>
                            {
                                dogs.map( (i, index) => 
                                    <li className="flex items-center gap-4" > 
                                        <img src={"https://dog.ceo/api/breed/hound/images/randow"+index} />
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

export default Dogs;