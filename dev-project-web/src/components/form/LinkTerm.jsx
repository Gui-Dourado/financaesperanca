import { DivLinksTerm, LinksTerm } from "./styles";

const LinkTerm = ({ to, handleOnClick, text }) => {
    return (
        <DivLinksTerm>
            <LinksTerm to={to} onClick={handleOnClick} target="_blank" rel="noopener noreferrer" >{text}</LinksTerm>
        </DivLinksTerm>
    );
}

export default LinkTerm;