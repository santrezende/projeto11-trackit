import img from "../assets/trackit.png"
import { InitialScreen, Screen } from "../components/InitialScreen"
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { Link } from "react-router-dom";

export default function SingUp() {
    const navigate = useNavigate();

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const templateSingUp = {
        email: email,
        name: name,
        image: image,
        password: password
    };

    function registerAccount() {
        console.log(templateSingUp);
        setIsSubmitting(true);
        const promise = axios.post(url, templateSingUp);

        promise.then((res) => {
            console.log(res);
            navigate("/");
            setIsSubmitting(false);
        });

        promise.catch((error) => {
            console.log(error);
            alert(error.message);
            setIsSubmitting(false);
        });
    }

    return (
        <InitialScreen>
            <img src={img} />
            <h1>TrackIt</h1>
            <form>
                <input data-test="email-input" disabled={isSubmitting} value={email} type="email" placeholder="email" onChange={event => setEmail(event.target.value)} />
                <input data-test="password-input" disabled={isSubmitting} value={password} type="password" placeholder="senha" onChange={event => setPassword(event.target.value)} />
                <input data-test="user-name-input" disabled={isSubmitting} value={name} type="text" placeholder="nome" onChange={event => setName(event.target.value)} />
                <input data-test="user-image-input" disabled={isSubmitting} value={image} type="url" placeholder="foto" onChange={event => setImage(event.target.value)} />
                <button data-test="signup-btn" disabled={isSubmitting} onClick={registerAccount} type="button">{isSubmitting ? <ThreeDots color="#FAFAFA" size={30} /> : "Cadastrar"}</button>
            </form>
            <Link data-test="login-link" to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </InitialScreen>
    )
}