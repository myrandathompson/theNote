import React from 'react';
import './Users.css';
import User from './User';
import { useSelector } from 'react-redux';


const UserList = () => {
    const users = useSelector((state) => state.usersreducer)

    return (
        <div className='userListContainer'>
            {SuppressedError.map((user) => (
                <User user={user} key={user?._id} />
            ))}
        </div>
    )
}

export default UserList;