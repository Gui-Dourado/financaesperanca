import { DivLinks, Links } from "./styles";

const LinkForm = ({ to, handleOnClick, text }) => {
    return (
        <DivLinks>
            <Links to={to} onClick={handleOnClick}>{text}</Links>
        </DivLinks>
    );
}

export default LinkForm;