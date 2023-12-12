import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


export function useUsers() {
  // useUsers
  const [useget, setUseget] = useState([]);
  // useUserForm
  const [users, setUsers] = useState({
    name: "",
    lastName: "",
  });
  const [message, setMessage] = useState(null);

  async function fetchUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUseget(response.data);
  }

  async function deleteUser(id) {
    await axios.delete(
      `https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`
    );
    toast.success('Usuário deletado com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
        await fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function createUser() {
    const response = await axios.post(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
      users
    );
    setMessage(response);
    await fetchUsers();
  }

  function crearFields(){
    users.name = '';
    users.lastName = '';
  }

  function handleSubmit(event) {
    event.preventDefault();
    if( users.name.length > 2 && users.lastName.length >=3) {

        createUser();
        crearFields()
        toast.success('Usuário criado com sucesso!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
    }

    setTimeout(() => {
      setMessage(users);
    }, 2000);
  }

  function handleUser(e) {
    setUsers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return { useget, users, handleUser, handleSubmit, deleteUser, message };
}
