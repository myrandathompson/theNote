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

const ErrorBox = styled.div`
padding:30px
`;

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectToHomepage: false,
    };
  }

  signup() {
    
    axios.post(
        'http://localhost:3001/signup', 
        {
          email: this.state.email,
          password: this.state.password,
        },
        { withCredentials: true })
      
      .then(() => {
        this.context.checkAuth().then(() => {
          this.setState({error:false, redirectToHomepage: true});

        })
        
      })
      .catch((error) => {
        this.setState({error: error.response.data});
        
      });
  }

 
  render() {
    return(<>
    {this.state.redirectToHomepage && (
      <Navigate to={'/'} />
    )}
      <Container>
        <Header style={{ marginBottom: '20px' }}>Signup</Header>
        {this.state.error && (
          <ErrorBox>{this.state.error}</ErrorBox>
        )}
        <form onSubmit={Event => this.signup(Event)}>
          <Input placeholder={'email'} type="email" value={this.state.email}
          onChange={Event => this.setState({email:Event.target.value})} />
          <Input placeholder={'password'} type="password" value={this.state.password}
          autocomplete={'new-password'}
          onChange={ev => this.setState({ password:ev.target.value})} />
          <BlueButton onClick={() => this.signup()}>Signup</BlueButton>
        </form>
        </Container>
        </>
    )};}

SignupPage.contextType = UserContext;

export default SignupPage;