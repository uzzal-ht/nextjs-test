import Link from "next/link";

const Header = () => {
    return (
        <div className="py-10">
            <div className="container">
                <ul className="flex justify-center">
                    <li className="mr-10 text-lg font-medium hover:text-primary">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="mr-10 text-lg font-medium hover:text-primary">
                        <Link href="/user">
                            <a>User</a>
                        </Link>
                    </li>
                    <li className="mr-10 text-lg font-medium hover:text-primary">
                        <Link href="/comments">
                            <a>comments</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
