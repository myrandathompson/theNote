import React, { Component } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Input from './input';
import BlueButton from './BlueButton';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import UserContext from './UserContext';



const Container = styled.div`
padding: 30px 20px;
`;


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    login() {        
        axios.post('/login', {
        email: this.state.email,
        password: this.state.password,
      }, {
        withCredentials: true,
      })
      .then(() => {
        this.context.checkAuth()
        .then(() => {
          this.setState({ redirectToHomepage: true });
        });
      });
      
      
    }
    
    render() {
        return (<>
        {this.state.redirectToHomepage && (
            <Navigate to={'/'} />
        )}
        <Container>
            <Header style={{marginBottom: '20px'}}>Login</Header>
            <Input placeholder={'email'} type="email" value={this.state.email}
            onChange={ev => this.setState({email:ev.target.value})} />
            <Input placeholder={'password'} type="password" value={this.state.password}
            onChange={ev => this.setState({password:ev.target.value})} />
            <BlueButton onClick={() => this.login()}>Login</BlueButton>
        </Container>
        </>);
    }
}
LoginPage.contextType = UserContext;

export default LoginPage;