import img from "../assets/trackit.png"
import { InitialScreen } from "../components/InitialScreen";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <InitialScreen>
            <img src={img} />
            <h1>TrackIt</h1>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button type="submit" onClick={() => navigate("/habitos")}>Entrar</button>
            </form>
            <p onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</p>
        </InitialScreen>
    )
}