import {useState, useEffect} from 'react';
import './QuestionsPage.css'
import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import Header from './Header';
import GlobalHeader from './GlobalHeader';
import BlueButton from './BlueButton';
// import PropTypes from 'prop-types';
import axios from 'axios';

import { Link } from 'react-router-dom';

const HeaderRow = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
padding: 30px 20px;
`;






function QuestionsPage() {
    const [questions,setQuestions] = useState([]);
    function fetchQuestions() {
        axios.get('./questions', {withCredentials:true})
        .then(response => setQuestions(response.data));
    }
    useEffect(() => fetchQuestions(), []);
    return (
        <main>
            <Header />
           <HeaderRow>
            <GlobalHeader>QUESTIONS</GlobalHeader>
            <BlueButton>
                <Link to="/ask">Questions</Link>
                </BlueButton>
           </HeaderRow>
           {questions && questions.length > 0 && questions.map(question => (
            <QuestionRow title={question.title} id={question.id} />
                       ))}           

                    
           
        
        </main>
        
       
    )
}



export default QuestionsPage