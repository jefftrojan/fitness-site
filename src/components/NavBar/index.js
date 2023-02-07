import React from "react";
import { Container } from "components/common/CommonStyle";
import { NavBarContainer, NavItem, NavLink, NavList, TitleLink } from "./NavBarStyle"

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
                            <NavLink to="/"> Pricing</NavLink>
                        </NavItem>
                    </NavList>
                
            </NavBarContainer>
        </Container>
    )
}