import styled from 'styled-components';
import Input from './input';
// import AskBlueButton from './AskBlueButton';
import React from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react';

// import axios from 'axios';
import BlueButton from './BlueButton';
// import { Navigate } from 'react-router-dom';
import Header from './Header';


const Container = styled.div`
padding: 30px 20px;
`;


const PreviewQuestion = styled.div`
padding: 20px;
background-color: grey;
border-radius: 5px;
margin-bottom: 20px;
`;





const QuestionBodyInput = styled.textarea`
background: none;
border: 1px solid grey;
border-radius: 3px;
display: block;
width: 100%;
box-sizing: border-box;
padding: 10px;
min-height: 300px;
margin-bottom: 20px; 
color: black;  
`;





function AskPage() {

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [Navigate] = useState('');
    
    


    // function question(Event) {
    //     Event.preventDefault();
    //     axios.post('https://localhost:3001/questions', {
    //         title: questionTitle,
    //         content: questionBody,
    //     }, {withCreditals:true})
    //     .then(response => {
    //         console.log(response.data);
    //         Navigate('/questions'+response.data);

    //     });
    // }
    
    

    // function question() {
    //     Event.preventDefault();
    //     axios.post('http://localhost:3001/questions', {
    //         title: questionTitle,
    //         content: questionBody,
    //     }, {withCredentials: true})
    //     .then(response => console.log(response));
    // }

   
    return (
        <Container>
            <Navigate to={'/questions'} />
            <Header style={{marginBottom: '20px'}}>Ask A Question</Header>
            <form onSubmit={Event => PreviewQuestion(Event)}>
                <Input type="text"
                value={questionTitle}
                onChange={e => setQuestionTitle(e.target.value)}
                placeholder="Title" />
                
            <QuestionBodyInput
            onChange={e => setQuestionBody(e.target.value)}
            placeholder="More information about your question." value={questionBody} />
            <PreviewQuestion>
                <Markdown plugins={[remarkGfm]} children={questionBody} />
            </PreviewQuestion>
            
            <BlueButton type={'submit'}>Submit Question</BlueButton>
            </form>
        </Container>
        // <main>
        //     <h1>Ask a Question</h1>
        // <Input type="text" 
        //     value={questionTitle} 
        //     onChange={e => setQuestionTitle(e.target.value)}
        //     placeholder="Title of your question" />
        //     <QuestionBodyInput 
        //         onChange={e => setQuestionBody(e.target.value)}
        //         placeholder="Question?">{questionBody}</QuestionBodyInput>
        //     <PreviewQuestion>
        //         <Markdown>
        //             plugins={{gfn}} children={questionBody}
        //          </Markdown>
        //     </PreviewQuestion>
        //     <AskBlueButton style={{marginTop:'20px'}}>Submit</AskBlueButton>
        
        
        // </main>
        
            
            
       
    );
}
    

export default AskPage;