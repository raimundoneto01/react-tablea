 import { useEffect, useState } from "react"

 


export default function UserEffect(){

    const [ name, setName ] = useState([])
    


    async function fetChat(){
        const response = await fetch('https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users');
        const result = await response.json()
        setName(result)
    }
    
    
    

    useEffect(()=>{
        fetChat()
       
    }, [])


    return(
        <div className="border-t p-2 mt-2 border-black">
             <h1>Lidando com UserEffect</h1>   
             
        </div>
    )
}