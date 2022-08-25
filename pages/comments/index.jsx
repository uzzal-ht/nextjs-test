import CommentSection from '../../components/CommentSection'

const Comments = ({comments}) => {
    return (
        <div className="comment-wrapper">
            <CommentSection comments={comments} />
        </div>
    )
}


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10")
    const comments = await res.json()
    
    return {
        props: {
            comments
        }
    }
}


export default Comments;
