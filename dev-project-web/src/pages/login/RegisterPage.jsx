import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { createSessions, createUser } from "../../services/api";

import Form from "../../components/form/Form";
import TitleForm from "../../components/form/Title";
import InputForm from "../../components/form/Input";
import ButtonForm from "../../components/form/Button";
import SelectForm from "../../components/form/Select"
import CheckboxForm from "../../components/form/Checkbox";
import LinkTerm from "../../components/form/LinkTerm";

import { toast } from "react-toastify";

const RegisterPage = () => {
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [userlastname, setLastUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpass, setConfpass] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [validation, setValidation] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        console.log('username', username);
        console.log('userlastname', userlastname);
        console.log('email', email);
        console.log('password', password);
        console.log('confpass', confpass);
        console.log('age', age);
        console.log('gender', gender);

        if (validation === false) {
            toast.error('É necessário aceitar os termos.');
        } else {
            try {
                await createUser(username, userlastname, email, password, confpass, age, gender, validation)
                    .then(async () => {
                        await createSessions(email, password);

                        login(email, password);

                        toast.success('Conta criada com sucesso.');
                    });
            } catch (err) {
                const message = err.response;

                console.log(message.data);

                toast.error(message.data.error);
            }
        }
    }

    return (
        <>
            <Form>
                <TitleForm text="CADASTRAR" />
                <InputForm type="text" name="username" text="Nome:" placeholder="nome" value={username} handleOnChange={(e) => setUsername(e.target.value)} />
                <InputForm type="text" name="userlastname" text="Sobrenome:" placeholder="sobrenome" value={userlastname} handleOnChange={(e) => setLastUsername(e.target.value)} />
                <InputForm type="text" name="email" text="E-mail:" placeholder="e-mail" value={email} handleOnChange={(e) => setEmail(e.target.value)} />
                <InputForm type="password" name="password" text="Senha:" placeholder="senha" value={password} handleOnChange={(e) => setPassword(e.target.value)} />
                <InputForm type="password" name="confpass" text="Confirme a Senha:" placeholder="senha" value={confpass} handleOnChange={(e) => setConfpass(e.target.value)} />
                <InputForm type="text" name="age" text="Idade:" placeholder="idade" value={age} handleOnChange={(e) => setAge(e.target.value)} />
                <SelectForm type="select" text="Gênero:" value={gender} onChange={setGender} />
                <CheckboxForm type="checkbox" name="terms" text={<LinkTerm to={"/termsuse"} text="Li e concordo com os Termos de Uso e o Aviso de Privacidade" />} value={validation} handleOnChange={() => setValidation(!validation)} />
                <ButtonForm text="CADASTRAR" handleOnClick={handleRegister} />
            </Form>
        </>
    );
}

export default RegisterPage;