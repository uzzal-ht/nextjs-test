const UserDetails = ({ name, username, email, body }) => {
    return (
        <div className="container">
            <div className="comment-details">
                <h3>{name}</h3>
                <p>{username}</p>
                <p>{email}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const comments = await res.json();

    const paths = comments.map((element) => {
        return {
            params: {
                id: element.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const { id } = context.params;

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    const comment = await res.json();

    return {
        props: {
            ...comment,
        },
    };
};

export default UserDetails;
