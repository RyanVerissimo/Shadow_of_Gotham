import Global from "../../styles/global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Title } from "./styles";
import UserForm from "../../components/UserForm";
import UserGrid from "../../components/UserGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackButton } from "../../components/BackButton";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3000/auth/users");
            setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
        } catch (error) {
            toast.error("Erro ao buscar usuários");
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Container>
                <Title>Gerenciar Usuários</Title>
                <UserForm onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
                <UserGrid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
                <BackButton />
            </Container>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <Global />
        </>
    );
};

export default ManageUsers;