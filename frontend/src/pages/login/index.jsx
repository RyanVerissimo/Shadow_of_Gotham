import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Global from "../../styles/global";
import { BodyContainer, Button, ForgotPassword, FormLogin, Input, InputBox, InputLabel, Label, RememberForgot, Title, Wrapper } from "./styles";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:3000/auth/login", { email, password });


            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);

                switch (response.data.role) {
                    case "admin":
                        navigate("/ManageUsers");
                        break;
                    case "manager":
                        navigate("/ManageItem");
                        break;
                    case "employee":
                        navigate("/CamerasCity");
                        break;
                    default:
                        navigate("/");
                }
            }
        } catch (error) {
            alert("Erro ao fazer login: " + (error.response?.data?.message || "Erro desconhecido"));
        }
    };

    return (
        <BodyContainer>
            <Global />
            <Wrapper>
                <FormLogin onSubmit={handleLogin}>
                    <Title>BatLogin</Title>
                    <InputBox>
                        <Input type="email" placeholder="Email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </InputBox>
                    <InputBox>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </InputBox>

                    <RememberForgot>
                        <Label><InputLabel type="checkbox" /> Remember me</Label>
                        <ForgotPassword href="#">Forgot password?</ForgotPassword>
                    </RememberForgot>
                    <Button type="submit">Login</Button>
                </FormLogin>
            </Wrapper>
        </BodyContainer> 
    );
};

export { Login };
