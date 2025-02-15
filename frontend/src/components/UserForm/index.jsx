import { useEffect, useRef } from "react";
import { FormContainer, Input, InputArea, Label, Select } from "./styles";
import { Button } from "../Button";
import axios from "axios";
import { toast } from "react-toastify";

const UserForm = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;
            user.name.value = onEdit.name;
            user.email.value = onEdit.email;
            user.role.value = onEdit.role;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = ref.current;

        if (!user.name.value || !user.email.value || !user.role.value) {
            return toast.warn("Preencha todos os campos!");
        }

        const userData = {
            name: user.name.value,
            email: user.email.value,
            role: user.role.value,
            password: "123456",
        };

        try {
            if (onEdit) {
                await axios.put(`http://localhost:3000/auth/users/${onEdit.id}`, userData);
                toast.success("Usuário atualizado com sucesso!");
            } else {
                await axios.post("http://localhost:3000/auth/register", userData);
                toast.success("Usuário cadastrado com sucesso!");
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Erro ao processar a requisição.");
        }

        user.name.value = "";
        user.email.value = "";
        user.role.value = "";

        setOnEdit(null);
        getUsers();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="name" />
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Cargo</Label>
                <Select name="role" defaultValue="" required>
                    <option value="" disabled>Selecione um cargo</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </Select>
            </InputArea>
            <Button type="submit" title="Salvar" />
        </FormContainer>
    );
};

export default UserForm;
