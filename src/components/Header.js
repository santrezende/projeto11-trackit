import styled from "styled-components";
import Context from "../Context";
import React, { useContext } from "react";

export default function Header() {
    const context = useContext(Context);

    return (
        <HeaderContainer data-test="header">
            <h1>TrackIt</h1>
            <img src={context.imageURL} />
        </HeaderContainer>
    )
}

export const HeaderContainer = styled.header`
box-sizing: border-box;
background-color: #126BA5;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 10vh;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
z-index: 1;

h1{
    font-family: "Playball";
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
}

img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    z-index: 1;
}
`