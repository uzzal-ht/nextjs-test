export default function Details({result}) {
    
    return (
        <div className='container'>
            <h3>{result?.title}</h3>
            <p>{result?.body}</p>
        </div>     
    )
}

export const getServerSideProps  = async (context) => {
    const {id} = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const result = await res.json()
    
    return {
        props: {
            result
        }
    }
}

