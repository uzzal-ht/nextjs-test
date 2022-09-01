import CommentCard from "./CommentCard";

const CommentSection = ({ comments }) => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-5">
                {comments.map((comment) => (
                    <CommentCard key={comment.id} {...comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
