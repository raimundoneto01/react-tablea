import axios from 'axios'
import { useEffect, useState } from 'react';

export function useUsersForm(){
    const [ users, setUsers ] = useState({
        name: '',
        lastName:'',
    })
 const [message, setMessage ] = useState(null);
 

 async function createUser(){
    const response = await axios.post('https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users', users)
    setMessage(response);
    console.log(response);
}



function handleSubmit(event){
    event.preventDefault()
    createUser()
    
    setTimeout(()=>{
        setMessage(users)
    }, 2000)
   

}


function handleUser(e){
    setUsers((prev)=>(
        {
            ...prev,
            [e.target.name]: e.target.value,
        }
    ))
}


    return{ users, handleUser, handleSubmit,  message}
}