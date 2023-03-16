import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer, SideBtn, CenterBtn } from "../components/Menu";
import { HistoryPageTitle } from "./HistoryPageTitle";

export default function History() {
    const navigate = useNavigate();

    return (
        <Screen>
            <Header>
                <h1 onClick={() => navigate("/")}>TrackIt</h1>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/naruto_episodios_ineditos__3kf0w13t5-1210x544.jpg" />
            </Header>

            <HistoryPageTitle>
                <p>Histórico</p>
            </HistoryPageTitle>

            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

            <Footer>
                <SideBtn>Habitos</SideBtn>
                <CenterBtn>Hoje</CenterBtn>
                <SideBtn>Historico</SideBtn>
            </Footer>
        </Screen>
    )
}

const Screen = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: #F2F2F2;
align-items: center;
padding: 0 15px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;  
color: #666666;
`