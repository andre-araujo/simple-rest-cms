import { withRouter } from 'next/router';
import Link from 'next/link';

const links = [
    {
        url: '/admin/dashboard',
        text: 'Content',
    },
    {
        url: '/admin/dashboard/content-types',
        text: 'Content-types',
    },
    {
        url: '/admin/dashboard/account',
        text: 'Account',
    }
]

function Header({ router }) {
    return (
        <nav>
            <div className="container">
                <h1>Admin dashboard</h1>
                <ul>
                    {
                        links.map(link => (
                            <li key={link.url}>
                                <Link href={link.url}>
                                    <a className={router.route === link.url && 'active'}>{link.text}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <style jsx>{`
                nav {
                    background: #fafafa;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
                }

                h1 {
                    text-transform: uppercase;
                    font-size: 1rem;
                }

                ul {
                    display: flex;
                    align-itens: center;
                }

                li:not(:last-child) {
                    margin-right: 1rem;
                    padding-right: 1rem;
                    position: relative;
                }

                li:not(:last-child):after {
                    content: '';
                    position: absolute;
                    height: .5rem;
                    width: 1px;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #ccc;
                }

                a,
                a:visited,
                a:active {
                    color: #333;
                    cursor: pointer;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: .7rem;
                }

                a:hover,
                a.active {
                    color: #ffa500;
                }

                .container {
                    line-height: 3rem;
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </nav>
    );
}

export default withRouter(Header);
