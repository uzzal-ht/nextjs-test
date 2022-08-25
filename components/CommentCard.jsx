import Link from "next/link";

const CommentCard = ({name, email, id}) => {
    return (
        <div className="card">
            <h3>
                <Link href={`/comments/${id}`}>
                    <a>{name}</a>
                </Link>
            </h3>
            <p>{email}</p>
        </div>
    )
}

export default CommentCard;
