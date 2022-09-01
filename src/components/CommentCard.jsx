import Link from "next/link";

const CommentCard = ({ name, email, id }) => {
    return (
        <div className="card border p-5 text-center">
            <h4>
                <Link href={`/comments/${id}`}>
                    <a>{name.substring(0, 30)}</a>
                </Link>
            </h4>
            <p>{email}</p>
        </div>
    );
};

export default CommentCard;
