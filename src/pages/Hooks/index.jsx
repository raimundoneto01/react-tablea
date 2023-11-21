import React, { useState } from "react";
export default function Hooks(){


    const [ counter, setCounter ] = useState(0);

    const handleClick=()=>{
        setCounter((next)=> next + 1)
    }
    const handleClick1=()=>{
        setCounter(0)
    }
    return(
        <>
            <div>
                <h2>useState</h2>
                <div className="flex gap-2 items-center ">

                    <button className="text-xl" onClick={handleClick}>mais</button>
                        <p className="text-xl">{counter}</p>
                    <button className="text-xl" onClick={handleClick1}>menos</button>
                </div>
            </div>
        </>
    );
}