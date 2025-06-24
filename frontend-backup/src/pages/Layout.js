import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to ="/">QuestionsPage</Link>
                </li>
                <li>
                    <Link to ="/ask">AskPage</Link>
                </li>
                <li>
                    <Link to ="/signup">SignupPage</Link>
                </li>
                <li>
                    <Link to ="/login">LoginPage</Link>
                </li>
            </ul>

        </nav>
        <Outlet />
        
        </>
    )
};


export default Layout;