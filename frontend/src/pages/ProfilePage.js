

import Header from "./Header";
import styled from 'styled-components';
import BlueButton from "./BlueButton";
import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom"

const Container = styled.div`
padding: 30px 20px;
`;


function ProfilePage() {
    const {checkAuth} = useContext(UserContext)
    const [redirectToTheHomePage, setRedirectToTheHomePage] = useState(false)
    function logout() {
        axios.post('/logout', {withCredentials: true})
        .then(() => {
            checkAuth().then(() => setRedirectToTheHomePage(true));
            setRedirectToTheHomePage(true);
        });
    }
    return (
        <>
        {redirectToTheHomePage && (
            <Navigate to={'/'} />
        )}
        <Container>
            <Header>Profile</Header>
            <BlueButton onClick={() => logout()}>Logout</BlueButton>
        </Container>
        
        </>
    )
}

export default ProfilePage