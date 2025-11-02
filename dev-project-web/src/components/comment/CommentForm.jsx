import { useState } from "react";

import { Form, Textarea, Submit, } from "./styles";

const CommentForm = ({ onSubmit, disabled }) => {
    const [content, setContent] = useState('');
    const [sending, setSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!content.trim()) return;
        setSending(true);
        await onSubmit(content, () => setContent(''));
        setSending(false);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder={disabled ? 'Faça login para comentar' : 'Escreva um comentário...'}
                disabled={disabled || sending}
            />
            <Submit type="submit" disabled={disabled || sending}>Enviar</Submit>
        </Form>
    );
}

export default CommentForm;