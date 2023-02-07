import styled  from "styled-components";
import { device } from "../../styles/theme";
export const NavContainer = styled.div`

    display: flex;
    justify-content:space-between;
    align-items: center;

`;

export const TitleLink = styled.link`

    color: ${props => props.theme.TextColor};
    font-size: 2rem;
    font-weight: bold,

`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    transition: .5s;

    @media (max-wigth:767px) {
        flex-direction: column;
        row-gap: 5rem;
        padding: 5rem;
        background-color: ${props => props.theme.ContainerColor};
        position: fixed;
        width: 350px;
        min-height: 100vh;
        top: 55px;
        box-shadow:  0px 5px rgba(255, 255, 255, 0.47);
        right: 0;
    }


`;

export const NavItem = styled.li ``;

export const NavLink = styled.link`
    font-size: 1.5rem;
    color: ${props => props.about.theme.TextColor};
    transition: .4s;
    &:hover {
       color: ${props => props.about.theme.PrimaryColor};

    }
    @media ${device.tablet}{
        font-size: 1.6rem;
    }


    @media ${device.laptop}{
        font-size: 2rem;
    }

`;

export const NavIcon = styled.div`
    svg {
        font-size: 2.2rem;
        cursor: pointer;
        fill: ${props => props.theme.TextColor};

    }
`

export const Hamburger = styled.div`
    font-size: 2rem;
    cursor: pointer;
    color: ${props => props.theme.TextColor};

    @media ${device.tablet} {
        display: none;

    }

`;