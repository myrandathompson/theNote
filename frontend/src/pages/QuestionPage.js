import React from 'react';
import styled from "styled-components";

import {useEffect,useState} from 'react';
import axios from 'axios';
import Header from "./Header";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Container = styled.div`
padding: 30px 20px;
`;
function QuestionPage() {
    const [question,setQuestion] = useState()
    function fetchQuestion() {
        axios.get('./question')
        .then(response => {
            setQuestion(response.data);
        });
    }
    useEffect(() => fetchQuestion(), []);
    return (
        <>
        <Container>
            {question && (
                <>
                <Header>{question && question.title}</Header>
                <Markdown plugins={[remarkGfm]} children={question} />
                </>
            


            )}
            
        </Container>
        
        
        </>
    );
}

export default QuestionPage;