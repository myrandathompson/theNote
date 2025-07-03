import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <div>
                    <li>
                        <Link to ="/questions">Questions</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to ="/ask">Ask</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to ="/signup">Signup</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link to ="/login">Login</Link>
                    </li>                    
                </div>
            </ul>

        </nav>
        <Outlet />
        
        </>
    )
};


export default Layout;