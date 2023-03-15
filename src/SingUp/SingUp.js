import img from "../assets/trackit.png"
import { InitialScreen, Screen } from "../components/InitialScreen"
import { useNavigate } from "react-router-dom";

export default function SingUp() {
    const navigate = useNavigate();

    return (
        <InitialScreen>
            <img src={img} />
            <h1>TrackIt</h1>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="url" placeholder="foto" />
                <button type="submit">Cadastrar</button>
            </form>
            <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
        </InitialScreen>
    )
}