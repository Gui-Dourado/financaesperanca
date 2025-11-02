import styled from "styled-components";

export const NavBarContainer = styled.div`
    top: 0;
    left: 0;
    background: var(--cor7);
    height: 75px;
    width: 100%;
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    nav ul {
        list-style: none;
    }

    nav ul li {
        display: inline-block;
        margin: 20px;
    }

    nav ul li a {
        text-decoration: none;
        color: var(--cor3);
    }

    a:hover {
        border-bottom: 5px solid var(--cor5);
    }

    @media (max-width: 820px) {
        .Navigation {
            display: none;
        }

        .MobileNavigation {
            display: flex;
            align-items: center;
        }

        .Hamburger {
            position: absolute;
            right: 5%;
            cursor: pointer;
        }

        nav ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            margin: 0;
            padding: 0;
            right: 0;
            width: 100%;
            background: var(--cor7);
            border-top: 2px solid var(--cor3);
            text-align: right;
        }

        nav ul li {
            padding-right: 10%;
        }

        a:hover {
            border-bottom: nome;
            color: var(--cor6);
        }
    }
`;

export const NavigationContainer = styled.nav`
    &.Navigation {
        display: flex;
    }
`;

export const MobileNavigationContainer = styled.nav`
    display: none;

    &.MobileNavigation {
        display: flex;
        align-items: center;
    }

    .Hamburguer {
        position: absolute;
        right: 5%;
        cursor: pointer;
    }

    @media (min-width: 821px) {
        display: none;
    }
`;