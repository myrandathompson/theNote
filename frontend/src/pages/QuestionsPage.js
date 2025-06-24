import './QuestionsPage.css'
import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import Header from './Header';
import GlobalHeader from './GlobalHeader';
import BlueButton from './BlueButton';

import { NavLink } from 'react-router-dom';

const HeaderRow = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
padding: 30px 20px;
`;






function QuestionsPage() {
    return (
        <main>
            <Header />
           <HeaderRow>
            <GlobalHeader>QUESTIONS</GlobalHeader>
            <BlueButton>
                <NavLink to="/ask">Ask a Question</NavLink>
                </BlueButton>
           </HeaderRow>
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />
           <QuestionRow />

                    
           
        
        </main>
        
       
    )
}



export default QuestionsPage