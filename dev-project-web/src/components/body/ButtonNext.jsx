import { useNavigate } from "react-router-dom";

import { updateProgress } from "../../services/api";

import { ButtonMini } from "./styles";

const ButtonNext = ({ text, to, field, user_id }) => {
    const navigate = useNavigate();

    const handleRedirect = async () => {
        if (field && user_id) {
            try {
                await updateProgress(user_id, field);
                console.log(`Progresso atualizado: ${field}`);
            } catch (err) {
                console.error(err);
            }
        }

        navigate(to);
    };

    return (
        <>
            <ButtonMini onClick={handleRedirect}>{text}</ButtonMini>
        </>
    );
}

export default ButtonNext;