import UserCard from "./UserCard"

const UserSection = ({ users }) => {
    return (
        <div className="container">
            <h3>All User</h3>
            <div className="user-list">
                {users.map((user, index) => (
                    <UserCard key={index} {...user} />
                ))}
            </div>
        </div>
    )
}

export default UserSection;


