import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { HabitsPageTitle } from "./HabitsPageTitle";
import axios from "axios";
import Context from "../Context";
import React, { useContext, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';

export default function Habits(props) {
    const context = useContext(Context);

    const weekdaysNumbers = [0, 1, 2, 3, 4, 5, 6];

    const weekdaysName = ["D", "S", "T", "Q", "Q", "S", "S"];

    const config = {
        headers: {
            Authorization: `Bearer ${context.token}`,
        },
    };

    const [showCreateCard, setShowCreateCard] = React.useState(false);
    const [habitName, setHabitName] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [selectedIndexes, setSelectedIndexes] = React.useState([]);

    const urlHabit = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const habitTemplate = {
        name: habitName,
        days: selectedIndexes
    }

    function selectDays(index) {
        if (selectedIndexes.includes(index)) {
            setSelectedIndexes(selectedIndexes.filter(i => i !== index));
        } else {
            setSelectedIndexes([...selectedIndexes, index]);
        }
    }


    function createHabit() {
        setIsSubmitting(true);

        const promise = axios.post(urlHabit, habitTemplate, config);
        promise.then(() => {
            setIsSubmitting(false);
            setShowCreateCard(false);
            setHabitName("");
            setSelectedIndexes([]);
            listHabits();
        });
        promise.catch(error => {
            alert(error.response.data.message);
            setIsSubmitting(false);
        });
    };

    function listHabits() {
        const promise = axios.get(urlHabit, config);
        promise.then(response => {
            props.setHabits(response.data);
        });
    }

    function deleteHabit(index) {
        const confirm = window.confirm("Deseja realmente apagar o hábito?");
        if (confirm == true) {
            const promise = axios.delete(`${urlHabit}/${index}`, config);
            promise.then(() => listHabits());
        }
    }

    useEffect(() => {
        const promise = axios.get(urlHabit, config);
        promise.then(response => {
            props.setHabits(response.data);
        });
    }, []);

    return (
        <Screen>
            <Header />

            <HabitsPageTitle>
                <p>Meus Habitos</p>
                <button data-test="habit-create-btn" onClick={() => setShowCreateCard(true)}>+</button>
            </HabitsPageTitle>

            <CardCreateHabit data-test="habit-create-container" showCreateCard={showCreateCard}>
                <input data-test="habit-name-input" disabled={isSubmitting} value={habitName} type="text" placeholder="nome do hábito" onChange={event => setHabitName(event.target.value)} />
                <div>
                    {weekdaysName.map((d, index) =>
                        <Botao
                            data-test="habit-day"
                            disabled={isSubmitting}
                            onClick={() => selectDays(index)}
                            key={index}
                            style={{
                                backgroundColor: selectedIndexes.includes(index) ? '#D4D4D4' : '#FAFAFA',
                                color: selectedIndexes.includes(index) ? '#FAFAFA' : '#D4D4D4'
                            }}
                        >
                            <p>{d}</p>
                        </Botao>
                    )}

                </div>

                <div>
                    <button data-test="habit-create-cancel-btn" onClick={() => setShowCreateCard(false)}>Cancelar</button>
                    <button
                        data-test="habit-create-save-btn"
                        style={isSubmitting ? { opacity: 0.7 } : null}
                        disabled={isSubmitting}
                        onClick={createHabit}
                    >
                        {isSubmitting ? <ThreeDots color="#FAFAFA" size={50} /> : "Salvar"}
                    </button>
                </div>
            </CardCreateHabit>

            {context.habits.length > 0 ? (
                <>
                    {context.habits.map((h) => (
                        <CardHabit data-test="habit-container" key={h.id}>
                            <div>
                                <p data-test="habit-name">{h.name}</p>
                                <ion-icon data-test="habit-delete-btn" onClick={() => deleteHabit(h.id)} name="trash-sharp"></ion-icon>
                            </div>

                            <div>
                                {weekdaysNumbers.map((d) => (
                                    <IconCard data-test="habit-day" key={d} isActive={h.days.includes(d)}>
                                        {weekdaysName[d]}
                                    </IconCard>
                                ))}
                            </div>
                        </CardHabit>

                    ))}
                </>
            ) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

            <Menu />
        </Screen >
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
background-color: #FAFAFA;
color: #D4D4D4;
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
        cursor: pointer;
    }
}
div:nth-child(2){
    margin-top: 10px;
    display: flex;
}
`
const IconCard = styled.p`
background-color: ${props => props.isActive ? "#D4D4D4" : "#FAFAFA"};
color: ${props => props.isActive ? "#FAFAFA" : "#D4D4D4"};
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
`