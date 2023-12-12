import axios from "axios";
import { useState, useEffect } from "react";

export default function useUsersTable() {
    
  const [useget, setUseget] = useState([]);

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
    await fetchUsers()
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { useget, deleteUser };
}
