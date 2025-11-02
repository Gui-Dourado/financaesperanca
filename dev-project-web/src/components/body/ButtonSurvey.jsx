import { useNavigate } from "react-router-dom";

import { updateProgress } from "../../services/api";

import { Actions, Button } from "./styles";

const ButtonSurvey = ({ text, to, field, user_id }) => {
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
        <Actions>
            <Button onClick={handleRedirect}>{text}</Button>
        </Actions>
    );
}

export default ButtonSurvey;