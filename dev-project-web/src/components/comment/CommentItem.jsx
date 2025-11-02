import { Item, Body, Meta, Content, Pending } from "./styles";

const getUserName = (c = {}) => {
    const candidates = [
        c.comments?.username,
        c.username,
        c.name,
        c.user?.username,
        c.user?.name,
        c.author?.username,
        c.author?.name,
        c.profile?.username,
        c.profile?.name,
        c.user_name,
        c.userName,
    ];

    const found = candidates.find(v => typeof v === "string" && v.trim());
    if (found) return found.trim();

    const anyId = c.user_id ?? c.userId ?? c.uid ?? c.id;
    return anyId ? `Usuário ${anyId}` : "Usuário";
};

const CommentItem = ({ comment }) => {
    const c = comment ?? {};

    const userName = getUserName(c);

    const ts = c.createdAt ?? c.created_at ?? c.date ?? c.timestamp ?? null;
    const date = ts
        ? new Date(ts).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
        : "";

    const isPending = Boolean(c.pending);

    return (
        <Item>
            <Body>
                <Meta>
                    <strong>{userName}</strong>
                    {date && (
                        <>
                            <span>•</span>
                            <span>{date}</span>
                        </>
                    )}
                    {isPending && <Pending>Enviando...</Pending>}
                </Meta>
                <Content>{c.content ?? ""}</Content>
            </Body>
        </Item>
    );
};

export default CommentItem;