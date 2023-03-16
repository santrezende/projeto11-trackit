import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer, SideBtn, CenterBtn } from "../components/Menu";
import { HabitsPageTitle } from "./HabitsPageTitle";

export default function Habits() {
    const navigate = useNavigate();

    return (
        <Screen>
            <Header>
                <h1 onClick={() => navigate("/")}>TrackIt</h1>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/naruto_episodios_ineditos__3kf0w13t5-1210x544.jpg" />
            </Header>

            <HabitsPageTitle>
                <p>Meus Habitos</p>
                <button>+</button>
            </HabitsPageTitle>

            <CardCreateHabit>
                <input type="text" placeholder="nome do hábito" />
                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div>

                <div>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </CardCreateHabit>

            <CardHabit>
                <div>
                    <p>Ler 1 capítulo de livro</p>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>

                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div>
            </CardHabit>

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

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
font-size: 18px;
line-height: 22px;
color: #666666;
`

const CardCreateHabit = styled.div`
width: 100%;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
padding: 18px;
padding-right: 30px;

input{
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
}

div{
    display: flex;
}

button{
    background-color: #FFFFFF;
    color: #D4D4D4;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-right: 5px;
    margin-top: 10px;
}

div:nth-child(3) {
    display: flex;
    justify-content: right;
    margin-top: 20px;

    button:last-child{
    width: 85px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    font-size: 16px;
    }
    button:nth-last-child(2) {
    width: 85px;
    height: 35px;
    background-color: #FFFFFF;
    color: #52B6FF;
    border: none;
    font-size: 16px;
    margin-right: 10px;
    }
}
`
const CardHabit = styled.div`
width: 100%;
height: 90px;
background-color: #FFFFFF;
border-radius: 5px;
margin-top: 15px;
padding: 0 10px;

div:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon{
        font-size: 20px;
        margin-top: 10px;
        margin-right: 5px;
    }
}
div:nth-child(2){
    margin-top: 10px;

    button{
    background-color: #FFFFFF;
    color: #D4D4D4;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-right: 5px;
}
}
`