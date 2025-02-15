import { useEffect, useRef } from "react";
import { FormContainer, Input, InputArea, Label } from "./styles";
import { Button } from "../Button";
import axios from "axios";
import { toast } from "react-toastify";

const Form = ({ getUsers, onEdit, setOnEdit }) => {

    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.name.value = onEdit.name;
            user.quantity.value = onEdit.quantity;
            user.classification.value = onEdit.classification;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.name.value ||
            !user.quantity.value ||
            !user.classification
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
                .put(`http://localhost:3000/resources/${onEdit.id}`, {
                    name: user.name.value,
                    quantity: user.quantity.value,
                    classification: user.classification.value
                })
                .then(({ data }) => toast.success(data.message))
                .catch((err) => toast.error(err.response.data.message)); 

        } else {
            await axios
                .post("http://localhost:3000/resources", {
                    name: user.name.value,
                    quantity: user.quantity.value,
                    classification: user.classification.value
                })
                .then(({ data }) => toast.success(data.message))
                .catch((err) => toast.error(err.response.data.message));

        }

        user.name.value = "";
        user.quantity.value = "";
        user.classification.value = "";

        setOnEdit(null);
        getUsers();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="name"/>
            </InputArea>
            <InputArea>
                <Label>Quantidade</Label>
                <Input name="quantity" type="number" min={0} max={100}/>
            </InputArea>
            <InputArea>
                <Label>Classificação</Label>
                <Input name="classification"/>
            </InputArea>

            <Button type="submit" title="Salvar"/>
        </FormContainer>
    );
};

export default Form;