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
                <input data-test="email-input" type="email" placeholder="email" />
                <input data-test="password-input" type="password" placeholder="senha" />
                <button data-test="login-btn" type="submit" onClick={() => navigate("/habitos")}>Entrar</button>
            </form>
            <p data-test="signup-link" onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</p>
        </InitialScreen>
    )
}