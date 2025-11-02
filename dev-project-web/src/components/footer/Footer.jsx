import { FooterContainer, LeftSide, RightSide, SocialLink } from "./styles";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <FooterContainer>
            <LeftSide>
                <h3>Contato</h3>
                <p>Email: contato.financa.esperanca@gmail.com</p>
            </LeftSide>
            <RightSide>
                <h3>Siga-nos</h3>
                <div>
                    <SocialLink
                        href="https://www.youtube.com/@Finan%C3%A7aEsperan%C3%A7a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillYoutube size="30px" />
                    </SocialLink>
                    <SocialLink
                        href="https://www.instagram.com/financa.esperanca/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillInstagram size="30px" />
                    </SocialLink>
                </div>
            </RightSide>
        </FooterContainer>
    )
}
export default Footer;