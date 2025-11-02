import { useState } from "react";

import NavLinks from "./NavLinks";

import { MobileNavigationContainer } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const Hamburger = (
        <AiOutlineMenu
            className="Hamburguer"
            size="35px"
            color="white"
            onClick={() => setOpen(!open)}
        />
    );

    const CloseIcon = (
        <AiOutlineClose
            className="Hamburguer"
            size="35px"
            color="white"
            onClick={() => setOpen(!open)}
        />
    );

    const closeMobileMenu = () => setOpen(false);

    return (
        <MobileNavigationContainer className="MobileNavigation">
            {open ? CloseIcon : Hamburger}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </MobileNavigationContainer>
    );
}

export default MobileNavigation;