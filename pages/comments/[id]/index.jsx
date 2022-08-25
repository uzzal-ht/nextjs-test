const UserDetails = ({name, username, email, body}) => {
    return (
        <div className="container">
            <div className="comment-details">
                <h3>{name}</h3>
                <p>{username}</p>
                <p>{email}</p>
                <p>{body}</p>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const {id} = context.query

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const comments = await res.json()
    
    return {
        props: {
            ...comments
        }
    }
}

export default UserDetails;
