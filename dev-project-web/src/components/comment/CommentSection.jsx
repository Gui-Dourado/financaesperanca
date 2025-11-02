import { useContext, useEffect, useState } from "react";

import { getComment, createComment } from "../../services/api";
import { AuthContext } from "../../contexts/auth";

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { Section, Header, Empty } from "./styles";

const CommentSection = ({ module_id }) => {
    const { user } = useContext(AuthContext);

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            setLoading(true);
            const response = await getComment(module_id);
            setComments(response.data || []);
        } catch (err) {
            console.error(err);
            setError("Erro ao carregar comentários.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (module_id) loadData();
    }, [module_id]);

    const handleCreateComment = async (content, resetForm) => {
        if (!user?.id) {
            setError("Faça login para comentar.");
            return;
        }
        if (!content.trim()) return;

        const tempComment = {
            id: `temp-${Date.now()}`,
            user_id: user.id,
            module_id,
            content,
            created_at: new Date().toISOString(),
            pending: true,
            user_name: user.username,
        };
        setComments(prev => [tempComment, ...prev]);

        try {
            const response = await createComment({
                user_id: user.id,
                module_id,
                content,
            });
            setComments(prev =>
                prev.map(c => (c.id === tempComment.id ? response.data : c))
            );
            resetForm();
        } catch (err) {
            console.error(err);
            setComments(prev => prev.filter(c => c.id !== tempComment.id));
            setError("Erro ao enviar comentário.");
        }
    };

    return (
        <Section>
            <Header>Comentários</Header>
            <CommentForm onSubmit={handleCreateComment} disabled={!user?.id} />

            {error && <Empty>{error}</Empty>}

            {loading ? (
                <Empty>Carregando comentários...</Empty>
            ) : comments.length === 0 ? (
                <Empty>Nenhum comentário ainda.</Empty>
            ) : (
                comments.map(comment => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                    />
                ))
            )}
        </Section>
    );
};

export default CommentSection;