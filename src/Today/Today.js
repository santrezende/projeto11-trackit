import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer, SideBtn, CenterBtn } from "../components/Menu";
import { TodayPageTitle } from "./TodayPageTitle"

export default function Today() {
    const navigate = useNavigate();

    return (
        <Screen>
            <Header>
                <h1 onClick={() => navigate("/")}>TrackIt</h1>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/naruto_episodios_ineditos__3kf0w13t5-1210x544.jpg" />
            </Header>

            <TodayPageTitle>
                <p>Segunda, 17/05</p>
                <p>Nenhum hábito concluído ainda</p>
            </TodayPageTitle>

            <TodayHabitCard>
                <div>
                    <p>Ler 1 capítulo de livro</p>
                    <p>Sequência atual: 3 dias<br />Seu recorde: 5 dias</p>
                </div>
                <div>
                    <button><ion-icon name="checkmark-sharp"></ion-icon></button>
                </div>
            </TodayHabitCard>

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
`

const TodayHabitCard = styled.div`
width: 100%;
height: 95px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
padding: 15px;

p:nth-child(1){
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}

p:nth-child(2){
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
    margin-top: 5px;
}

button{
    height: 70px;
    width: 70px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;

    ion-icon{
        font-size: 40px;
        color: #fafafa;
    }
}
`