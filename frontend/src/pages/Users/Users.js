import React from 'react';
import LeftSideBar from '../components/LeftSideBar';
import './Users.css';
import UserList from './UserList';


const Users = ({slidein}) => {
    return (
        <div className='homeContainer1'>
            <LeftSideBar slideIn={slidein} />
            <div className='homeContainer2'>
                    <UserList />
                </div>
            </div>
    
    )
}

export default Users;