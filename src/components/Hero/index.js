import React from "react";
import { Container } from "../common/CommonStyle";
import { HeroContainer } from "./HeroStyle";
import HeroImg from "../../assets/images/gym1.jpg"

export default function Hero() {
    return (
        <Container>
            <HeroContainer>
                <img src={HeroImg} alt="hero-img" />
            </HeroContainer>
        </Container>
    )
}