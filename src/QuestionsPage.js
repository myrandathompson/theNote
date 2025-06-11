import './QuestionsPage.css'
import styled from 'styled-components';
import QuestionRow from './QuestionRow';

const StyledHeader = styled.h1`
font-size: 40px;
`;

const HeaderRow = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
padding: 30px 20px;
`;

const BlueButton = styled.button`
    background-color: blue;
    color: white;
    border:0;
    border-radius: 5px;
    padding: 12px 10px;
    `;




function QuestionsPage() {
    return (
        <main>
           <HeaderRow>
            <StyledHeader>Top Questions</StyledHeader>
            <BlueButton>Ask&nbsp;Question</BlueButton>
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