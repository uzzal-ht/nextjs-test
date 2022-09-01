import Link from "next/link";

const Home = ({ result }) => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-5">
                {result.map((post) => (
                    <div key={post.id} className="list border p-5">
                        <h4>
                            <Link href={`/post/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const result = await res.json();

    return {
        props: {
            result,
        },
    };
};

export default Home;
