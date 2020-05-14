import React from 'react'
import styled from "styled-components"

const Header = styled.header`
    max-width: 70rem; 
    margin: 2rem auto; 
    text-align: center; 
`;

const H1 = styled.h1`
    font-family: 'Oswald', sans-serif; 
    margin-bottom: 2.5rem; 
`;

export const Heading = () => {
    return (
        <Header>
            <H1>Unsplash Images</H1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas fugit neque odit doloremque repellendus vitae veniam</p>
        </Header>
    )
}
