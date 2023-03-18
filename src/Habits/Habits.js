import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { HabitsPageTitle } from "./HabitsPageTitle";
import axios from "axios";
import Context from "../Context";
import React, { useContext, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';

export default function Habits() {
    const context = useContext(Context);

    const weekdays = [
        { id: 0, name: "D" },
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "Q" },
        { id: 4, name: "Q" },
        { id: 5, name: "S" },
        { id: 6, name: "S" }
    ];

    const config = {
        headers: {
            Authorization: `Bearer ${context.token}`,
        },
    };

    const [showCreateCard, setShowCreateCard] = React.useState(false);
    const [buttonColors, setButtonColors] = React.useState(weekdays.map(d => ({ id: d.id, isSelected: false })));
    const [daysHabit, setDayHabit] = React.useState([]);
    const [habitName, setHabitName] = React.useState("");
    const [daysArray, setDaysArray] = React.useState(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [habits, setHabits] = React.useState([]);
    const [renderEmptyPage, setRenderEmptyPage] = React.useState(true);

    const urlHabit = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const habitTemplate = {
        name: habitName,
        days: daysArray
    }

    function selectDays(id) {
        setButtonColors(buttonColors.map(button => {
            if (button.id === id) {

                if (!button.isSelected) {
                    setDayHabit([...daysHabit, { id: button.id }]);
                } else {
                    setDayHabit(daysHabit.filter(day => day.id !== button.id));
                }

                return {
                    ...button,
                    isSelected: !button.isSelected,
                };
            }
            return button;
        }));
        setDaysArray(daysHabit.map((d) => d.id));
    }

    setInterval(() => setDaysArray(daysHabit.map((d) => d.id)), 500);

    function createHabit() {
        setIsSubmitting(true);

        const promise = axios.post(urlHabit, habitTemplate, config);
        promise.then(() => {
            setIsSubmitting(false);
            setShowCreateCard(false);
            setHabitName("");
            setDayHabit([]);
            setButtonColors(weekdays.map(d => ({ id: d.id, isSelected: false })));
        });
        promise.catch(error => {
            alert(error.response.data.message);
            setIsSubmitting(false);
        });
    };

    function listHabits() {
        const promise = axios.get(urlHabit, config);
        promise.then(response => setHabits(response.data));
    }

    useEffect(() => {
        setRenderEmptyPage(false);
        listHabits();
        if (habits == []) {
            setRenderEmptyPage(true);
        }
    }, []);

    return (
        <Screen>
            <Header />

            <HabitsPageTitle>
                <p>Meus Habitos</p>
                <button onClick={() => setShowCreateCard(true)}>+</button>
            </HabitsPageTitle>

            <CardCreateHabit showCreateCard={showCreateCard}>
                <input disabled={isSubmitting} value={habitName} type="text" placeholder="nome do hábito" onChange={event => setHabitName(event.target.value)} />
                <div>
                    {weekdays.map((d) =>
                        <Botao
                            disabled={isSubmitting}
                            colorButton={buttonColors.find(button => button.id === d.id)?.isSelected}
                            onClick={() => selectDays(d.id)}
                            key={d.id}
                        >
                            <p>{d.name}</p>
                        </Botao>
                    )}
                </div>

                <div>
                    <button onClick={() => setShowCreateCard(false)}>Cancelar</button>
                    <button
                        style={isSubmitting ? { opacity: 0.7 } : null}
                        disabled={isSubmitting}
                        onClick={createHabit}
                    >
                        {isSubmitting ? <ThreeDots color="#FAFAFA" size={50} /> : "Salvar"}
                    </button>
                </div>
            </CardCreateHabit>

            {habits.map((h) => (
                <CardHabit key={h.id}>
                    <div>
                        <p>{h.name}</p>
                        <ion-icon name="trash-sharp"></ion-icon>
                    </div>

                    <div>
                        <p>D</p>
                        <p>S</p>
                        <p>T</p>
                        <p>Q</p>
                        <p>Q</p>
                        <p>S</p>
                        <p>S</p>
                    </div>
                </CardHabit>
            ))}

            {renderEmptyPage ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : null}

            <Menu />
        </Screen>
    )
}

const Screen = styled.div`
display: flex;
flex-direction: column;
background-color: #F2F2F2;
align-items: center;
padding: 0 15px;
height: max-content;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
margin-bottom: 85px;
`

const CardCreateHabit = styled.div`
width: 100%;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
display: ${props => props.showCreateCard ? "flex" : "none"};
justify-content: center;
flex-direction: column;
padding: 20px;
margin-top: 10px;

input{
    width: 97%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
}

div{
    display: flex;
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
    font-size: 16px;
    margin-right: -3px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    button:nth-last-child(2) {
    width: 85px;
    height: 35px;
    background-color: #FFFFFF;
    color: #52B6FF;
    font-size: 16px;
    }
}
`

const Botao = styled.button`
background-color: ${props => props.colorButton ? "#D4D4D4" : "#FAFAFA"};
color: ${props => props.colorButton ? "#FAFAFA" : "#D4D4D4"};
width: 30px;
height: 30px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-right: 5px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
}
`

const CardHabit = styled.div`
width: 100%;
height: 90px;
background-color: #FFFFFF;
border-radius: 5px;
margin-top: 15px;
padding: 10px;

div:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon{
        font-size: 25px;
        margin-right: 5px;
        z-index: 0;
    }
}
div:nth-child(2){
    margin-top: 10px;
    display: flex;

    p{
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
    display: flex;
    align-items: center;
    justify-content: center;
}
}
`