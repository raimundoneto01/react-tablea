
import React, { useState } from "react"; 
import { Input } from "../../components/ReactHooks/UseState/Input";
import UserEffect from "../../components/ReactHooks/UserEfferct";
export default function Hooks(){


    const [ counter, setCounter ] = useState(0);
    const [ amount, setAmount ] = useState(0)

    const handleClick=()=>{
        setCounter((next)=> next + 1)
    }
    const handleClick1=()=>{
        setCounter(0)
    }

    const somar=()=>{
        setCounter(counter +( + amount))
    }

    const meuClick=()=>{
        somar()
    }


    const adicionar=()=>{
        setCounter(counter + (+ amount) + 10)
    }
    const remove=()=>{
        setCounter(counter - 10)
    }
    return(
        <>
            {/* <div>
                <h2>useState</h2>

                <div className="flex gap-2">
                        <input type=" text" value={amount} onChange={({target})=>setAmount(target.value)} />
                        <button className="px-2 py-1 border bg-sky-800 rounded text-white"
                        onClick={meuClick}
                        >Enviar</button>
                  </div>

                <div className="flex gap-2 items-center ">
                    
                    <button className="text-xl" onClick={handleClick}>mais</button>
                        <p className="text-xl">{counter }</p>
                    <button className="text-xl" onClick={handleClick1}>menos</button>
                </div>
                <div className="flex gap-3 mt-3 ">
                    <button onClick={adicionar}>Adicionar</button>
                    <button onClick={remove}>Remover</button>
                </div>
                
            </div>
            <Input/> */}
            <UserEffect/>
        </>
    );
}