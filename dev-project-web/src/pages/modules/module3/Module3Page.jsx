import { useContext, useEffect } from "react";

import { AuthContext } from "../../../contexts/auth";

import Limit from "../../../components/body/Limit";
import TitleModule from "../../../components/body/TitleModule";
import Video from "../../../components/body/Video";
import CommentSection from "../../../components/comment/CommentSection";
import ButtonNext from "../../../components/body/ButtonNext";

import { ButtonSpace } from "../../../components/body/styles";

const Module3Page = () => {
    const { user } = useContext(AuthContext);

    const thisModule = 3;
    const user_id = user?.id

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Limit>
            <TitleModule module_id={thisModule} />
            <Video module_id={thisModule} />
            <ButtonSpace>
                <ButtonNext text="Voltar" to="/questionnaire2" />
                <ButtonNext text="Avançar" to="/questionnaire3" field='module3_video' user_id={user_id} />
            </ButtonSpace>
            <CommentSection module_id={thisModule} />
        </Limit>
    );
}

export default Module3Page;