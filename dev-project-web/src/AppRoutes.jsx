import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider, AuthContext } from "./contexts/auth";

import { AppContainer, GlobalStyle, Limit } from "./styles";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

import MainPage from "./pages/main/MainPage";

import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/login/RegisterPage";
import TermsUsePage from "./pages/login/TermsUsePage";

import ProfilePage from "./pages/profile/ProfilePage";

import Module1Page from "./pages/modules/module1/Module1Page";
import Questionnaire1Page from "./pages/modules/module1/Questionnaire1Page";

import Module2Page from "./pages/modules/module2/Module2Page";
import Questionnaire2Page from "./pages/modules/module2/Questionnaire2Page";

import Module3Page from "./pages/modules/module3/Module3Page";
import Questionnaire3Page from "./pages/modules/module3/Questionnaire3Page";

import SatisfactionPage from "./pages/satisfaction/SatisfactionPage";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            toast.info('É necessario está logado para acessar.');

            return <Navigate to="/login" />
        }
        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <AppContainer>
                    <GlobalStyle />
                    <NavBar />
                    <ToastContainer position="top-center" autoClose={3000} />
                    <Limit>
                        <Routes>
                            <Route path="/" element={<MainPage />} />

                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/termsuse" element={<TermsUsePage />} />

                            <Route path="/profile" element={<Private> <ProfilePage /> </Private>} />

                            <Route path="/module1" element={<Private> <Module1Page /> </Private>} />
                            <Route path="/questionnaire1" element={<Private> <Questionnaire1Page /> </Private>} />

                            <Route path="/module2" element={<Private> <Module2Page /> </Private>} />
                            <Route path="/questionnaire2" element={<Private> <Questionnaire2Page /> </Private>} />

                            <Route path="/module3" element={<Private> <Module3Page /> </Private>} />
                            <Route path="/questionnaire3" element={<Private> <Questionnaire3Page /> </Private>} />

                            <Route path="/satisfaction" element={<Private> <SatisfactionPage /> </Private>} />
                        </Routes>
                    </Limit>
                    <Footer />
                </AppContainer>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;