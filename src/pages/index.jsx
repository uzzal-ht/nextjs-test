import Link from "next/link";

export default function Home({result}) {
    return (
        <div className='container'>
            <h3>This is home page</h3>
            {result.map((post, index) => (
                <div key={index} className="list">
                    <h4>
                        <Link href={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </h4>
                </div>
            ))}
        </div>    
    )
}


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
    const result = await res.json()
    
    return {
        props: {
            result
        }
    }
}

