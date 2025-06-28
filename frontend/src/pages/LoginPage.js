import { Component } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Input from './input';
import  BlueButton from './BlueButton';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';

const Container = styled.div`
padding: 30px 20px;`



const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};


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
            email: this.state.username,
            password: this.state.password,
        }, config, {withCredentials: true}).then(response => {
            console.log('Login successful:', response.data);
            // Handle successful login, 
        }).catch(error => {
            console.error('Login failed:', error);
            // Handle login failure, e.g., show an error message
        });
    }
    
    render() {
        const {location } = this.props; 
        const state = location?.state || {};
      
        return (<>
            <Container>
                <Header style={{ marginBottom: '20px' }}>Login</Header> 
                <Input placeholder={'email'} type="email" value={this.state.email} 
                       onChange={ev => this.setState( state, {email:ev.target.value})} />
                <Input placeholder={'password'} type="password" value={this.state.password}
                       onChange={ev => this.setState( state, {email:ev.target.value})} />    
                <BlueButton onClick={() => this.login()}>Login</BlueButton>
            </Container>
    
    
    
    </>);
    }
    
}


export default LoginPage;