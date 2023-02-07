import React from "react";
import { Container } from "../common/CommonStyle";
import { Hamburger, NavBarContainer, NavIcon, NavItem, NavLink, NavList, TitleLink, } from "./NavBarStyle"
import { BsSun } from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"



export default function NavBar() {
    return (
        <Container>
            <NavBarContainer>
                <TitleLink to="/"> Fitness Site </TitleLink>
                    <NavList>
                        <NavItem>
                            <NavLink to="/"> Pricing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/"> Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/"> Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/"> Blog</NavLink>
                        </NavItem>

                        <NavIcon>
                            <BsSun />
                        </NavIcon>
                    </NavList>
                    <Hamburger>
                        <GiHamburgerMenu />
                    </Hamburger>
                
            </NavBarContainer>
        </Container>
    )
}