import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { HistoryPageTitle } from "./HistoryPageTitle";

export default function History() {

    return (
        <Screen>
            <Header />

            <HistoryPageTitle>
                <p>Histórico</p>
            </HistoryPageTitle>

            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

            <Menu />
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
color: #666666;
`