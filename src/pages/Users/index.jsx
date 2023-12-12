
import { Form } from '../../components/pages/users/Form'
import UserTable from '../../components/pages/users/Table'
import { useUsers } from '../../hook/useUsers'


export default function Users(){
    const { useget, users, deleteUser, handleSubmit, handleUser, message } = useUsers()
    
    return(
        <>
            <h1>Usuários </h1>
            <Form handleSubmit={handleSubmit} handleUser={handleUser} users={users} message={message}/>
            <UserTable deleteUser={deleteUser} useget={useget}/>
           
        </>
    )
}