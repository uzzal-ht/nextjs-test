import UserCard from "./UserCard";

const UserSection = ({ users }) => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-5">
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
};

export default UserSection;
