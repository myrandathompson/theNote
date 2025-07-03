import React from 'react';
import './LeftSideBar.css';
import { NavLink} from 'react-router-dom';


const LeftSideBar = ({slideIn}) => {
    const slideInStyle = {
        transform: 'translateX(0)',
        transition: 'transform 0.3s ease-in-out',
      };
      
      const slideOutStyle = {
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
      };
    return (
        <div className="left-sidebar" style={slideIn ? slideInStyle : slideOutStyle}>
            <nav className='sideNavBar'>
                <button className='navButton'>
                    <NavLink to='/' className="sideNavLink" activeclassname="active">
                        <p>HOME</p>
                    </NavLink>
                </button>
                <div className='sideNavDiv'>
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    <button className='navButton'>
                        <NavLink to='/QuestionPage' className='sideNavLink' activeclassname="active">
                        </NavLink>
                    </button>
                    <button className='navButton'>
                        <NavLink to='/users' className="sideNavLink" activeclassname="active">
                            <p>USERS</p>
                        </NavLink>
                    </button>
                </div>
            </nav>
        </div>
    )


}

export default LeftSideBar;