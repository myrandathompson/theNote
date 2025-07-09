import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../logo.png';
import search from './searchForm';
import './navBar.css';
import { setCurrentUser } from '../../actions/currentUserActions';
import { jwtDecode } from 'jwt-decode';

function NavBar({ handleslidein }) {
    var user = useSelector((state) => state.currentUser)


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        navigate("/")
        dispatch(setCurrentUser(null));
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = jwtDecode(token):
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse (localStorage.getItem("Profile"))))
    }, [User?.token, dispatch]);

    return (
        <nav className='mainNavBar'>
            <div className='navBar'>
                <button className='slideInIcon' onClick={() => handleslidein()}>
        
                </button>
                <div className='navBar1'>
                    <Link to='/' className='navItem navLogo'>

                    </Link>
                    <Link to='/' className='navItem navButton resNav'>
                        Items
                    </Link>
                    <Link to='/' className='navItem navButton resNav'>
                        About
                    </Link>
                    <Link to='/' className='navItem navButton resNav'>
                        Contact
                    </Link>
                    <form><input type='text' placeholder='Search...' />
                    
                    </form>
                </div>
                <div className='navBar2'>
                    {user === null ? (
                        <Link to='/Auth' className='navItem navLinks'>
                            Log in
                        </Link>
                                      
                ) : (
                    <>
                    <button className="nav-tem nav-links" onClick={handleLogout}>Log out</button>
                    
                    </>
                
                
                    )}
                </div>
            </div>
        </nav>
    )
}


export default NavBar;
