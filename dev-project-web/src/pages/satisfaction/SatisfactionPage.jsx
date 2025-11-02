import { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import Limit from "../../components/body/Limit";
import SatisfactionSection from "../../components/satisfaction/SatisfactionSection";

import { Title } from "../../components/satisfaction/styles";

const SatisfactionPage = () => {
    const { user } = useContext(AuthContext);

    const user_id = user?.id

    return (
        <Limit>
            <Title>Pesquisa de Satisfação</Title>
            <SatisfactionSection user_id={user_id} />
        </Limit>
    )
}

export default SatisfactionPage;