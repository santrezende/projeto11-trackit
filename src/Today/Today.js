import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { TodayPageTitle } from "./TodayPageTitle"

export default function Today() {

    return (
        <Screen>
            <Header />

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