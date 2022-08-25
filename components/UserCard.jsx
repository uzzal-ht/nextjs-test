import Link from "next/link";

const UserCard = ({name, email, id}) => {
    return (
        <div className="card">
            <h3>
                <Link href={`/user/${id}`}>
                    <a>{name}</a>
                </Link>
            </h3>
            <p>{email}</p>
        </div>
    )
}

export default UserCard;
