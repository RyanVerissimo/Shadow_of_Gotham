import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const UserGrid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (user) => {
        setOnEdit(user);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/auth/users/${id}`);
            setUsers(users.filter((user) => user.id !== id));
            toast.success("Usuário removido com sucesso!");
        } catch (err) {
            toast.error(err.response?.data?.message || "Erro ao deletar usuário.");
        }
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th>Cargo</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((user, i) => (
                    <Tr key={i}>
                        <Td>{user.name}</Td>
                        <Td>{user.email}</Td>
                        <Td>{user.role}</Td>
                        <Td>
                            <FaEdit onClick={() => handleEdit(user)} />
                            <FaTrash onClick={() => handleDelete(user.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default UserGrid;