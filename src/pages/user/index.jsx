import Head from "next/head";
import UserSection from "../../components/UserSection";

const User = ({ users }) => {
    return (
        <>
            <Head>
                <title>User page</title>
            </Head>
            <div className="user-wrapper">
                <UserSection users={users} />
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
};

export default User;
