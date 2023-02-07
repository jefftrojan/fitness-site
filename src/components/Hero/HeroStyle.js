import styled from "styled-components";
import { device } from "../../styles/theme";

export const HeroContainer = styled.div`

    height: 100vh;
    margin:0 2.4rem;

    display: grid:
    grid-template-columns: repeat(1,1fr);
    row-gap: 2rem;
    place-items: center;
    text-align: center;


    img {
        height: 300px;
        width: 300px;

    }

    @media ${device.tablet} {
        grid-template-columns: repeat(2,1fr);
        column-gap: 4rem;
        text-align: left;

        img {
            height:400px;
            width:400px;
            order:1;

        }



    }
`;

export const HeroTitle =styled.h1`
    font-size:3.5rem;
    font-weight:600;
    color: ${(props) => props.theme.TextColor};


    @media ${device.laptop}{

        font-size: 6.2rem;

    }
`;

export const HeroDescription = styled.p`
    font-size: 2rem;
    line-height: 1.5;
    margin: 2rem 0;
    color: ${(props) => props.theme.DescriptionColor};


    @media ${device.laptop}{
        font-size: 2.5rem;
    }


`;
