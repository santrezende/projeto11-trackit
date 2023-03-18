import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <Footer>
            <SideBtn onClick={() => navigate("/habitos")}>Habitos</SideBtn>
            <CenterBtn onClick={() => navigate("/hoje")}>Hoje</CenterBtn>
            <SideBtn onClick={() => navigate("/historico")}>Historico</SideBtn>
        </Footer>
    )
}

const Footer = styled.footer`
background-color: #FFFFFF;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 10vh;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-around;
align-items: center;
`

const SideBtn = styled.button`
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
width: 30vw;
height: 10vh;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #52B6FF;
`

const CenterBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #52B6FF;
width: 80px;
height: 80px;
border-radius: 100%;
margin-bottom: 20px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #FFFFFF;
`