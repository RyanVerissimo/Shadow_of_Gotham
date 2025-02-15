import Global from "../../styles/global"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Title } from "./styles";
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import { useEffect, useState } from "react";
import  axios  from "axios";
import { BackButton } from "../../components/BackButton";

const ManageItem = () => {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3000/resources");
            setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [setUsers]);

    return (
        <>
            <Container>
                <Title>ARMAZÉM</Title>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
                <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
                <BackButton />
            </Container>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <Global />
        </>
    );
}

export { ManageItem };