import Link from "next/link";

const Header = () => {
    return (
        <div className="container">
            <ul className="header">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/user">
                        <a>User</a>
                    </Link>
                </li>
                <li>
                    <Link href="/comments">
                        <a>comments</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
