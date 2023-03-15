import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";

export default function Habits() {
    const navigate = useNavigate();

    return (
        <Screen>
            <Header>
                <h1 onClick={() => navigate("/")}>TrackIt</h1>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/naruto_episodios_ineditos__3kf0w13t5-1210x544.jpg" />
            </Header>
        </Screen>
    )
}

const Screen = styled.div`
background-color: #F2F2F2;
`