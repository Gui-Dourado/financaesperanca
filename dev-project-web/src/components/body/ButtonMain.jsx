import { useNavigate } from "react-router-dom";

import { Actions, Button } from "./styles";

const ButtonMain = ({ text, to }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(to);
    };

    return (
        <Actions>
            <Button onClick={handleRedirect}>{text}</Button>
        </Actions>
    );
}

export default ButtonMain;