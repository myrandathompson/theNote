import React from 'react';
import LeftSideBar from '../buttons/sideBar/LeftSideBar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import editProfileForm from './editProfileForm';
import profileBio from './profileBio';  
import Header from "../Header";
import styled from 'styled-components';
import BlueButton from "./BlueButton";
import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom"

const ProfilePage = ({ slidein }) => {
    const { id } = useParams();
    const [Switch, setSwitch] = useState(false);

    const users = useSelector((state) => state.users)
    const currentProfile = users.filter((user) => user._id === id) [0]
    const currentUser = useSelector((state) => state.currentUser);

    return (
        <div className='profileContainer1'>
            <LeftSideBar slidein={slidein} />
            <div className='profileContainer2'>
                <section>
                    <div className="userDetailsContainer">
                        <div className='userDetails>
                        <div className="userName">
                        <h1>{currentProfile?.name}</h1>
                    </div>
                </div>
                {currentUser?.result?._id === id && (
                    <button className='editProfileButton type='button' onClick={() => setSwitch(true)} />
                    <h3>Edit Profile</h3>
                
                    </div>   
                    <>
                    {Switch ? (
                        <editProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                    ) : (
                        <profileBio currentProfile={currentProfile} />
                    )}
                        </>            
                </section>
            </div>
        </div>
    )
}

export default ProfilePage