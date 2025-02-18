import { Button } from "./styles";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
    };

    return <Button onClick={handleLogout}>Voltar</Button>;
};

export { BackButton };
