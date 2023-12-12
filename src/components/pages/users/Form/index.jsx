import { useUsersForm } from "./useUsersForm";

export function Form({ users, handleUser, handleSubmit, message }) {
  // const { users, handleUser, handleSubmit, message } = useUsersForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 px-3 py-3 border rounded-md justify-center items-center bg-white shadow"
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="nome">nome</label>
        <input
          className="outline-none border border-black rounded py-1 px-2"
          type="text"
          id="nome"
          name="name"
          placeholder="nome"
          value={users.name}
          onChange={handleUser}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="sobrenome">sobrenome</label>
        <input
          className="outline-none border border-black rounded py-1 px-2"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="sobrenome"
          value={users.lastName}
          onChange={handleUser}
        />
      </div>
      {message && message.statusText && <p>enviado</p>}
      <button className="w-full h-10 flex justify-center items-center text-white bg-sky-950 rounded-md shadow">
        Enviar
      </button>
    </form>
  );
}
