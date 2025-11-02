import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import { createSessions } from "../../services/api";

import Form from "../../components/form/Form";
import TitleForm from "../../components/form/Title";
import InputForm from "../../components/form/Input";
import ButtonForm from "../../components/form/Button";
import LinkForm from "../../components/form/Link";

import { toast } from "react-toastify";

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('email', email);
        console.log('password', password);

        try {
            const response = await createSessions(email, password);

            login(email, password);

            console.log('TOKEN->', response.data.token);
            localStorage.setItem('token', response.data.token);
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            console.log('login', response.data);
        } catch (err) {
            const message = err.response;

            console.log(message.data);

            toast.error(message.data.error);
        }
    }

    return (
        <>
            <Form>
                <TitleForm text="CONECTE-SE" />
                <InputForm type="text" name="email" text="E-MAIL:" placeholder="e-mail" value={email} handleOnChange={(e) => setEmail(e.target.value)} />
                <InputForm type="password" name="password" text="SENHA:" placeholder="senha" value={password} handleOnChange={(e) => setPassword(e.target.value)} />
                <ButtonForm text="CONECTE-SE" handleOnClick={handleLogin} />
                <LinkForm to={"/register"} text="Não tenho conta" />
            </Form>
        </>
    );
}

export default LoginPage;