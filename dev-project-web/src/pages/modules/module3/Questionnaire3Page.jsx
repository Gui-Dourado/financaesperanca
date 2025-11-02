import { useContext, useEffect, useState, useRef } from "react";

import { AuthContext } from "../../../contexts/auth";

import Limit from "../../../components/body/Limit";
import TitleQuestionnaire from "../../../components/body/TitleQuestionnaire";
import QuestionnaireSection from "../../../components/questionnaire/QuestionnaireSection";
import ButtonNext from "../../../components/body/ButtonNext";
import ButtonCheck from "../../../components/body/ButtonCheck"

import { ButtonSpace } from "../../../components/body/styles";

const Questionnaire3Page = () => {
    const { user } = useContext(AuthContext);

    const thisModule = 3;
    const user_id = user?.id

    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef(null);

    console.log(submitted);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Limit>
            <TitleQuestionnaire module_id={thisModule} />
            <QuestionnaireSection module_id={thisModule} ref={sectionRef} onSubmittedChange={setSubmitted} />
            <ButtonSpace>
                <ButtonNext text="Voltar" to="/module3" />
                {!submitted ? (
                    <ButtonCheck
                        text="Enviar Respostas"
                        onClick={() => sectionRef.current?.submit()} // <-- chama handleSubmit do filho
                    />
                ) : (
                    <ButtonNext
                        text="Avançar"
                        to="/satisfaction"
                        field="module3_questionnaire"
                        user_id={user_id}
                    />
                )}
            </ButtonSpace>
        </Limit>
    );
}

export default Questionnaire3Page;