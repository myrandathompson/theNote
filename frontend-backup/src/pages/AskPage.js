import styled from 'styled-components';
import Input from './input';
import AskBlueButton from './AskBlueButton';
import React, { use } from 'react';
import Markdown from 'https://esm.sh/react-markdown@10'
import gfn from 'remark-gfm';
import { useState } from 'react';
<<<<<<< HEAD:frontend-backup/src/pages/AskPage.js

import axios from 'axios';
import BlueButton from './BlueButton';
import { Navigate } from 'react-router-dom';
=======
import { initialState } from 'react';
>>>>>>> parent of a5cbfb7f (ask questions saved):frontend/src/pages/AskPage.js
import Header from './Header';


const PreviewQuestion = styled.div`
padding: 20px;
background-color: grey;
border-radius: 5px;
margin-bottom: 20px;
`;

const Container = styled.div`
padding: 30px 20 px;
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


const PreviewAsk = styled.div`
padding: 20px;
background-color: grey;
border-radius: 5px;
margin-bottom: 20px;
`;



function AskPage() {

    const [questionTitle, setQuestionTitle] = useState(initialState, '');
    const [questionBody, setQuestionBody] = useState(initialState, '');

   
    return (
        <main>
            <h1>Ask a Question</h1>
        <Input type="text" 
            value={questionTitle} 
            onChange={e => setQuestionTitle(e.target.value)}
            placeholder="Title of your question" />
            <QuestionBodyInput 
                onChange={e => setQuestionBody(e.target.value)}
                placeholder="Question?">{questionBody}</QuestionBodyInput>
            <PreviewQuestion>
                <Markdown>
                    plugins={{gfn}} children={questionBody}
                 </Markdown>
            </PreviewQuestion>
            <AskBlueButton style={{marginTop:'20px'}}>Submit</AskBlueButton>
        
        
        </main>
        
            
            
       
    );
}
    

export default AskPage;