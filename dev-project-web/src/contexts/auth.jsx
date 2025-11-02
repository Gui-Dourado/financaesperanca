import { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSessions, getLastCompleteModule } from "../services/api";
import { PROGRESS_ROUTES } from "../components/navbar/ProgressRoutes";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');

            if (user && token) {
                setUser(JSON.parse(user));
                api.defaults.headers.Authorization = `Bearer ${token}`;
            }
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    const goToLastProgress = async (userId) => {
        try {
            if (!userId) {
                toast.error("Usuário não identificado. Faça login novamente.");
                navigate("/login", { replace: true });
                return;
            }

            const res = await getLastCompleteModule(userId);
            const data = res?.data ?? res;

            if (!data || typeof data !== "object") {
                toast.error("Resposta inesperada do servidor.");
                navigate("/", { replace: true });
                return;
            }

            const { nextField, lastCompleted } = data;

            if (!nextField) {
                toast.success("Parabéns! Você concluiu todas as etapas.");
                navigate("/profile", { replace: true });
                return;
            }

            const nextPath = PROGRESS_ROUTES[nextField];
            if (!nextPath) {
                toast.error("Não encontrei a próxima rota. Fale com o suporte.");
                navigate("/", { replace: true });
                return;
            }

            toast.success(
                lastCompleted
                    ? `Continuando após: ${String(lastCompleted).replaceAll("_", " ")}`
                    : "Começando do início!"
            );

            navigate(nextPath, { replace: true });
        } catch (e) {
            console.error(e);
            toast.error("Não foi possível checar o progresso. Tente novamente.");
            navigate("/", { replace: true });
        }
    };

    const login = async (email, password) => {
        const response = await createSessions(email, password);

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setUser(response.data.user);

        await goToLastProgress(response.data.user?.id);
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        api.defaults.headers.Authorization = null;

        setUser(null);

        navigate('/');
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}