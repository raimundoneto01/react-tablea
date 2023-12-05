import { useState } from "react";
const formFields = [
  {
    id: "nome",
    label: "nome",
    type: "text",
  },
  {
    id: "sobrenome",
    label: "sobrenome",
    type: "text",
  },
  {
    id: "email",
    label: "email",
    type: "email",
  },
  {
    id: "bairro",
    label: "bairro",
    type: "text",
  },

  {
    id: "senha",
    label: "senha",
    type: "password",
  },
];

export function Input() {
//   const [form, setForm] = useState(
//     formFields.reduce((acc, field) => {
//       return {
//         ...acc,
//         [field.id]: "",
//       };
//     }, {})
//   );
const [user, setUser ] = useState({
    nome: '',
    lastNome: '',
    email: '',
    bairro: '',
    cidade: '',  
})


const meuChange=({target})=>{
    setUser({...user, [target.id]: target.value})
}

const meuEnvio=()=>{
  
    console.log(user);
}
//   const handle = ({ target }) => {
//     const { id, value } = target;
//     setForm({ ...form, [id]: value });
//   };

//   const meuSubmite = (event) => {
//     event.preventDefault();
//     console.log(form);
//   };
  return (
    <form onSubmit={(event)=>event.preventDefault()}>
      <h2>linadando com react e usestatte</h2>
      <div className="felx flex-col  mt-3">
        <input 
        className="flex flex-col px-2 my-2 gap-3 border border-black "
        type="text" value={user.nome} id="nome" name="nome" placeholder="nome:" onChange={meuChange}/>

        <input 
        className="flex flex-col px-2 my-2 gap-3 border border-black"
        type="text" value={user.lastNome} id="lastNome" name="lastName" placeholder="SobreNome:" onChange={meuChange} />
      </div>
      
        <input 
        className="flex flex-col px-2 my-2 gap-3 border border-black"
        type="email" value={user.email} id="email" name="email" placeholder="E-mail:" onChange={meuChange} />

        <input
         className="flex flex-col px-2 my-2 gap-3 border border-black" 
        type="text" value={user.bairro} id="bairro" name="bairro" placeholder="Bairro:" onChange={meuChange} />
        <input
         className="flex flex-col px-2 my-2 gap-3 border border-black" 
        type="text" value={user.cidade} id="cidade" name="cidade" placeholder="Cidade:" onChange={meuChange} />

        <button onClick={meuEnvio}>Enviar</button>

      {/* <form className="flex flex-col gap-2" onSubmit={meuSubmite}>
        {formFields.map(({ id, label, type }) => (
          <div>
            <label htmlFor={label}>{label}</label>
            <input
              className="border border-black rounder px-1 py-1 outline-none"
              type={type}
              id={id}
              placeholder={label}
              value={form[id]}
              onChange={handle}
            />
          </div>
        ))}
        <button className="border border-black bg-green-600  mt-4 py-3 ">
          Enviar
        </button>
      </form> */}
      
    </form>
  );
}
