import { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import Form from "../../components/form/Form";
import LinkForm from "../../components/form/Link";

const ProfilePage = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = async () => {
        logout();
    }

    return (
        <>
            <Form>
                <LinkForm to={"/"} text="Sair da conta" handleOnClick={handleLogout} />
            </Form>
        </>
    );
}

export default ProfilePage;