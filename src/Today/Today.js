import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { TodayPageTitle } from "./TodayPageTitle";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Context from "../Context";
import React, { useContext, useEffect } from "react";
import axios from "axios";

export default function Today() {

    const context = useContext(Context);

    dayjs.locale("pt-br");
    const hoje = dayjs();
    const diaDaSemana = hoje.format('dddd');
    const dataFormatada = hoje.format('DD/MM');

    const urlToday = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const urlCheck = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
        headers: {
            Authorization: `Bearer ${context.token}`,
        },
    };

    const body = {

    };

    const [todayHabits, setTodayHabits] = React.useState([]);
    const [habitsPercentage, setHabitsPercentage] = React.useState(0);

    useEffect(() => {
        const promise = axios.get(urlToday, config);
        promise.then(response => setTodayHabits(response.data));

        const arrayNumberHabits = todayHabits.map(h => h.done);
        let doneHabits = 0;
        for (let i = 0; i < arrayNumberHabits.length; i++) {
            if (arrayNumberHabits[i] == true) {
                doneHabits++;
            }
        }
        setHabitsPercentage(parseInt((doneHabits / arrayNumberHabits.length) * 100));
    });

    function checkHabit(done, id) {
        if (done == false) {
            const promise = axios.post(`${urlCheck}/${id}/check`, body, config);
            promise.then(response => console.log(response));
            promise.catch(error => console.log(error));
        } else {
            const promise = axios.post(`${urlCheck}/${id}/uncheck`, body, config);
            promise.then(response => console.log(response));
            promise.catch(error => console.log(error));
        }
    }

    return (
        <Screen>
            <Header />

            <TodayPageTitle colorPercentage={todayHabits.length > 0 ? true : false}>
                <p data-test="today">{diaDaSemana}, {dataFormatada}</p>
                {todayHabits.length > 0 ? (
                    <p data-test="today-counter">{habitsPercentage}% dos hábitos concluídos</p>
                ) : (
                    <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                )
                }
            </TodayPageTitle>

            {todayHabits.map((h) => (
                <TodayHabitCard data-test="today-habit-container" key={h.id}>
                    <div>
                        <p data-test="today-habit-name">{h.name}</p>
                        <AtualSequence isDone={h.done} data-test="today-habit-sequence">
                            Sequência atual: <span>{h.currentSequence} dias</span>
                        </AtualSequence>

                        <Record recordColor={(h.currentSequence == h.highestSequence) && (h.currentSequence > 0) ? true : false} data-test="today-habit-record">
                            Seu recorde: <span>{h.highestSequence} dias</span>
                        </Record>
                    </div>
                    <div>
                        <CheckBtn data-test="today-habit-check-btn" isDone={h.done} onClick={() => checkHabit(h.done, h.id)}><ion-icon name="checkmark-sharp"></ion-icon></CheckBtn>
                    </div>
                </TodayHabitCard>
            ))}

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
margin-top: 15px;

p:nth-child(1){
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
`

const AtualSequence = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #666666;
margin-top: 5px;

span{
    color: ${props => props.isDone ? "#8FC549" : "#666666"};
}
`

const Record = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #666666;
margin-top: 3px;

span{
    color: ${props => props.recordColor ? "#8FC549" : "#666666"};
}
`

const CheckBtn = styled.button`
height: 70px;
width: 70px;
background-color: ${props => props.isDone ? "#8FC549" : "#EBEBEB"};
border: 1px solid #E7E7E7;
border-radius: 5px;
ion-icon{
    font-size: 40px;
    color: #FAFAFA;
    }
`