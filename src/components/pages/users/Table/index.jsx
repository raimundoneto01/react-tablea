// import useUsersTable from "./hook/useTable";

export default function UserTable({ useget, deleteUser }) {
  //   const { useget, deleteUser } = useUsersTable();

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>SobreNome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {useget.map((use) => (
          <tr key={use.id}>
            <td>{use.id}</td>
            <td>{use.name}</td>
            <td>{use.lastName}</td>
            <td>
              <button onClick={() => deleteUser(use.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
