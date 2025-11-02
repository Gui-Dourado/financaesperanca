import { Actions, Button } from "./styles";

const ButtonForm = ({ text, handleOnClick }) => {
    return (
        <Actions>
            <Button onClick={handleOnClick}>{text}</Button>
        </Actions>
    );
}

export default ButtonForm;