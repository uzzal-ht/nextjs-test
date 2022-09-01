const UserDetails = ({ name, username, email }) => {
    return (
        <div className="container">
            <div className="user-details">
                <h3>{name}</h3>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const { id } = context.query;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            ...user,
        },
    };
};

export default UserDetails;
