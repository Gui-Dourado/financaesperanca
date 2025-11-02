import { ButtonMini } from "./styles";

const ButtonCheck = ({ text, onClick, disabled }) => {
    const handleClick = async () => {
        if (onClick) {
            await onClick();
            return;
        }
    }

    return (
        <>
            <ButtonMini onClick={handleClick} disabled={disabled}>{text}</ButtonMini>
        </>
    );
}

export default ButtonCheck;