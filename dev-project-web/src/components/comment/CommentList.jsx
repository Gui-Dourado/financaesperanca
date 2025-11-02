import CommentItem from "./CommentItem";

import { List } from "./styles"

const CommentList = ({ comments }) => {
    return (
        <List>
            {(Array.isArray(comments) ? comments : [])
                .filter(Boolean)
                .map((c, idx) => (
                    <CommentItem key={c?.id ?? `comment-${idx}`} comment={c} />
                ))}
        </List>
    );
}

export default CommentList;