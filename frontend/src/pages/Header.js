import styled from 'styled-components';
import { useContext } from 'react';
import logo from './logo.png';
import './Header.css'
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

const StyledHeader = styled.header`
    background-color: #f8f9fa;
    `;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: inline-block;
    height: 30px;
    padding: 5px;
    img{
        margin-top: 7px;
        display: inline-block;
        float: left;
        width: 50px;
        height: 50px;
    }
    span{
        display: inline-block;
        padding-left: 5px;
        padding-top: 10px;
        font-size: 20px;
        font-weight: 300;
        
    }
    b{
        font-weight: normal;
        display: inline-block;
        margin-left: 2px;
    }
    `;

const SearchInput = styled.input`
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: white;
    padding: 8px 10px;
    margin-top: 9px;

`;

const ProfileLink = styled(Link)`
color: white;
text-decoration: none;
line-height: 50px;
`;


function Header() {
    const {user} =useContext(UserContext);
    return (
        <StyledHeader>
            <LogoLink to={'/'} className="logo">
                <img src={logo} alt="Logo" />
               
            </LogoLink>
            <form action="" className="search">
                <SearchInput type="text" placeholder='Search...' />
            </form>
            {user && (
                <ProfileLink href="" className="profile">User</ProfileLink>
            )}
            {!user && (
                <ProfileLink href="" className="profile">Login</ProfileLink>
            )}
            

        </StyledHeader>
    );

}

export default Header;