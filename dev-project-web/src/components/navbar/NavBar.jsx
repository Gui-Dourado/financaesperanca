import { useMediaQuery } from "react-responsive";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import { NavBarContainer } from "./styles";

const NavBar = () => {
    const isMobile = useMediaQuery({ maxWidth: 820 });

    return (
        <NavBarContainer>
            {isMobile ? <MobileNavigation /> : <Navigation />}
        </NavBarContainer>
    );
}

export default NavBar;