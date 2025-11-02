import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getLastCompleteModule } from "../../services/api";
import { PROGRESS_ROUTES } from "./ProgressRoutes";

import { AuthContext } from "../../contexts/auth";

import { toast } from "react-toastify";
import { motion } from "framer-motion";

const NavLinks = (props) => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const Username = () => {
        const userName = localStorage.getItem('username');

        if (userName) {
            return (userName);
        }

        return (user.username);
    }

    const Profile = () => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            return <Link to="/login">ENTRAR</Link>
        }

        return <Link to="/profile"><Username /></Link>
    }

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const continueFlow = async () => {
        try {
            const user_id = user?.id;
            if (!user_id) {
                toast.error("Usuário não identificado. Faça login novamente.");
                navigate("/login");
                return;
            }

            const res = await getLastCompleteModule(user_id);
            const data = res?.data ?? res;

            if (!data || (typeof data !== "object")) {
                toast.error("Resposta inesperada do servidor.");
                return;
            }

            const { nextField, lastCompleted } = data;

            if (!nextField) {
                toast.success("Parabéns! Você concluiu todas as etapas.");
                navigate("/profile");
                if (props?.isMobile && typeof props?.closeMobileMenu === "function") {
                    props.closeMobileMenu();
                }
                return;
            }

            const nextPath = PROGRESS_ROUTES[nextField];
            if (!nextPath) {
                toast.error("Não encontrei a próxima rota. Fale com o suporte.");
                return;
            }

            toast.success(
                lastCompleted
                    ? `Continuando após: ${String(lastCompleted).replaceAll("_", " ")}`
                    : "Começando do início!"
            );

            navigate(nextPath);
            if (props?.isMobile && typeof props?.closeMobileMenu === "function") {
                props.closeMobileMenu();
            }
        } catch (e) {
            console.error(e);
            toast.error("Não foi possível checar o progresso. Tente novamente.");
        }
    }

    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link to="/">INÍCIO</Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Link onClick={continueFlow}>CONTINUAR</Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <Profile />
            </motion.li>
        </ul>
    );
}

export default NavLinks;