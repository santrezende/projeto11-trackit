import img from "../assets/trackit.png"
import { InitialScreen } from "../components/InitialScreen";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage(props) {
    const navigate = useNavigate();

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const templateLogin = {
        email: email,
        password: password
    }

    function logIn() {
        setLoading(true);
        const promise = axios.post(url, templateLogin);

        promise.then((res) => {
            props.setToken(res.data.token);
            props.setImageURL(res.data.image);
            navigate("/hoje");
            setLoading(false);
        });

        promise.catch((error) => {
            alert(error.response.data.details);
            setLoading(false);
        })
    }

    return (
        <InitialScreen>
            <img src={img} />
            <h1>TrackIt</h1>
            <form>
                <input data-test="email-input" disabled={loading} type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} />
                <input data-test="password-input" disabled={loading} type="password" placeholder="senha" value={password} onChange={event => setPassword(event.target.value)} />
                <button style={loading ? { opacity: 0.7 } : null} data-test="login-btn" disabled={loading} type="button" onClick={logIn}>
                    {loading ? <ThreeDots color="#FAFAFA" size={30} /> : "Entrar"}
                </button>
            </form>
            <Link data-test="signup-link" to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </InitialScreen>
    )
}