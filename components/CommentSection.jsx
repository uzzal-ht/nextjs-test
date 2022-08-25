import CommentCard from "./CommentCard"

const CommentSection = ({comments}) => {
    return (
        <div className="container">
            <h3>All User</h3>
            <div className="user-list">
                {comments.map((comment, index) => (
                    <CommentCard key={index} {...comment} />
                ))}
            </div>
        </div>
    )
}

export default CommentSection;


