import styled from "styled-components";

export const InitialScreen = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #FFFFFF;

h1{
    font-family: "Playball";
    color: #126BA5;
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    margin-bottom: 30px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input{
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #DBDBDB;
}

button{
    width: 320px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background: #52B6FF;
    border-radius: 4.63636px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    padding-left: 10px;
    color: #FFFFFF;
}

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 20px;
}
`