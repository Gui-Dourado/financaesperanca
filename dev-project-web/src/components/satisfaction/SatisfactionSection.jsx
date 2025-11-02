import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createSurvey, updateProgress } from "../../services/api";

import { Form, Textarea, Submit, SubTitle } from "./styles";
import { toast } from "react-toastify";

const SatisfactionSection = ({ user_id, onSuccess, progressField = "survey_answers" }) => {
    const [text, setText] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!text.trim()) {
            setError("Escreva sua resposta antes de enviar.");
            return;
        }

        if (!user_id) {
            setError("Não foi possível identificar o usuário.");
            return;
        }
        try {
            setSending(true);

            const payload = {
                user_id,
                response: text.trim(),
            };

            const { data } = await createSurvey(payload);

            if (progressField && user_id) {
                try {
                    await updateProgress(user_id, progressField);
                } catch (updErr) {
                    toast.warn("Resposta enviada, mas não consegui atualizar seu progresso agora.");
                }
            }

            setSuccess("Resposta enviada com sucesso. Obrigado por participar!");
            toast.success("Resposta enviada com sucesso. Obrigado por participar!", {
                onClose: () => navigate("/profile")
            });
            setText("");
            onSuccess?.(data);
        } catch (err) {
            if (err?.response?.status === 409) {
                setError("Você já respondeu esta pesquisa.");
                toast.error("Você já respondeu esta pesquisa.");
            } else if (err?.response?.data?.error) {
                setError(err.response.data.error);
            } else {
                setError("Não foi possível enviar. Tente novamente.");
                toast.error("Não foi possível enviar. Tente novamente.");
            }
        } finally {
            setSending(false);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <SubTitle>
                O quanto você ficou satisfeito(a) com o conteúdo e a forma como o curso Finança Esperança foi apresentado?
            </SubTitle>
            <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escreva aqui sua percepção sobre o curso..."
                disabled={sending}
            />
            <Submit type="submit" disabled={sending} field={progressField}>
                {sending ? "Enviando..." : "Enviar"}
            </Submit>
        </Form>
    );
}

export default SatisfactionSection;