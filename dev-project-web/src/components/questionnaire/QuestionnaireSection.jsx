import { useEffect, useState, useContext, useCallback, forwardRef, useImperativeHandle } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/auth";
import { getQuestionsByModuleId, createResponse, checkResponsesByModule } from "../../services/api";

import { ItemContainer, ItemCard, ItemTitle, ItemList, ItemOptionButton } from "./styles";

const QuestionnaireSection = forwardRef(function QuestionnaireSection({ module_id, onSubmittedChange = () => { } }, ref) {
    const { user } = useContext(AuthContext);
    const user_id = user?.id;

    const [questions, setQuestions] = useState([]);
    const [currentAnswers, setCurrentAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userResponses, setUserResponses] = useState([]);

    useEffect(() => {
        onSubmittedChange(submitted);
    }, [submitted, onSubmittedChange]);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await getQuestionsByModuleId(module_id);
            const questionsData = response.data || [];
            setQuestions(questionsData);

            try {
                const respCheck = await checkResponsesByModule({ user_id, module_id });
                const data = respCheck?.data;

                if (data) {
                    const answersMap = {};
                    (data.results || []).forEach((r) => {
                        if (r.answered && r.alternative_id != null) {
                            answersMap[r.question_id] = r.alternative_id;
                        }
                    });
                    setCurrentAnswers(answersMap);
                    setSubmitted(Boolean(data.fully_answered));
                } else {
                    setSubmitted(false);
                    setCurrentAnswers({});
                }
            } catch (e) {
                setSubmitted(false);
                setCurrentAnswers({});
                if (e?.response?.status !== 404) console.error(e);
            }
        } catch (err) {
            console.error(err);
            setError('Erro ao carregar perguntas.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (module_id) loadData();
    }, [module_id]);

    const handleOptionClick = (question_id, alternative_id) => {
        setCurrentAnswers(prev => ({ ...prev, [question_id]: alternative_id }));
    };

    const handleSubmit = useCallback(async () => {
        const allAnswered = questions.every(q => currentAnswers[q.id] != null && currentAnswers[q.id] !== "");
        if (!allAnswered) {
            toast.error("Você precisa responder todas as perguntas!");
            return;
        }

        try {
            const sendPromises = Object.entries(currentAnswers).map(([question_id, alternative_id]) =>
                createResponse({ user_id, question_id: Number(question_id), alternative_id: Number(alternative_id) })
                    .then(response => ({ status: "fulfilled", question_id, response }))
                    .catch(error => ({ status: "rejected", question_id, error }))
            );
            await Promise.all(sendPromises);

            toast.success('Respostas enviadas!');
            const respCheck = await checkResponsesByModule({ user_id, module_id });
            const data = respCheck?.data;

            const answersMap = {};
            (data.results || []).forEach((r) => {
                if (r.answered && r.alternative_id != null) {
                    answersMap[r.question_id] = r.alternative_id;
                }
            });
            setCurrentAnswers(answersMap);
            setSubmitted(Boolean(data.fully_answered));
        } catch (err) {
            console.error(err);
            alert('Erro ao enviar respostas. Tente novamente.');
        }
    }, [questions, currentAnswers, user_id, module_id]);

    useImperativeHandle(ref, () => ({
        submit: handleSubmit
    }));

    return (
        <ItemContainer>
            {questions.map((q) => (
                <ItemCard key={q.id}>
                    <ItemTitle>{q.title}</ItemTitle>
                    <ItemList>
                        {(q.alternative || []).map((alt) => (
                            <ItemOptionButton
                                key={alt.id}
                                onClick={() => !submitted && handleOptionClick(q.id, alt.id)}
                                disabled={submitted}
                                $selected={currentAnswers[q.id] === alt.id}
                                $correct={submitted && alt.is_correct}
                                $wrong={submitted && currentAnswers[q.id] === alt.id && !alt.is_correct}
                            >
                                {alt.description}
                            </ItemOptionButton>
                        ))}
                    </ItemList>
                </ItemCard>
            ))}
        </ItemContainer>
    );
})

export default QuestionnaireSection;