import React, { useState } from 'react';
import './AskPage.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { askQuestion } from '../action/question';

const AskPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.currentuserreducer);
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTag, setQuestionTag] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            if (questionBody && questionTitle && questionTag) {
                dispatch(askQuestion({questionTitle, questionBody, questionTag, userposted:user.result.name}, navigate))
                alert("Question Posted Successful")
            } else {
                alert("Missing all fields")
            }
        } else {
            alert("Please Login to ask question")
        }
    }

    const handleEnter = (e) => {
        if (e.code === 'Enter') {
            setQuestionBody(questionBody + "\n");
        }
    }
    return (
        <div className="askQuestion">
            <div className="askQuestionContainer">
                <h1>Ask A Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="askFormContainer">
                        <label htmlFor="askQuestionTile">
                            <h4>Title</h4>
                            <p>Please be specific when asking a question</p>
                            <input type="text" id="askQuestionTitle"
                            onChange={(e) => {
                                setQuestionTitle(e.target.value);
                            }} placeholder="e.g. How would you write a for loop?" />                            
                        </label>
                        <label htmlFor="askQuestionBody">
                            <h4>Body</h4>
                            <p>What information do you need to answer the question ?</p>
                            <textarea name="" id="askQuestionBody" onChange={(e) => {
                                setQuestionBody(e.target.value);
                            }}
                            cols="30"
                            rows="10"
                            onKeyDown={handleEnter}
                            ></textarea>
                        </label>
                        <label htmlFor="askQuestionTag">
                            <h4>Tag</h4>
                            <p>Add up to 5 tags for your question</p>
                            <input type="text" id="askQuestionTag" onChange={(e) => {
                                setQuestionTag(e.target.value.split(" "));
                            }}
                            placeholder="e.g. (xml typescript javascript express"
                            />
                        </label>
                    </div>
                    <input type="submit"
                        value="Question Review"
                        className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default AskPage;



// import styled from 'styled-components';
// import Input from './input';
// import AskBlueButton from './AskBlueButton';
// import React from 'react'
// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

// import { useState } from 'react';

// import axios from 'axios';
// // import BlueButton from './BlueButton';
// // import { Navigate } from 'react-router-dom';
// // import Header from './Header';


// const Container = styled.div`
// padding: 30px 20px;
// `;


// const PreviewQuestion = styled.div`
// padding: 20px;
// background-color: grey;
// border-radius: 5px;
// margin-bottom: 20px;
// `;





// const QuestionBodyInput = styled.textarea`
// background: none;
// border: 1px solid grey;
// border-radius: 3px;
// display: block;
// width: 100%;
// box-sizing: border-box;
// padding: 10px;
// min-height: 300px;
// margin-bottom: 20px; 
// color: black;  
// `;





// function AskPage() {

//     // const [question] = useState()
//     const [questionTitle, setQuestionTitle] = useState('');
//     const [questionBody, setQuestionBody] = useState('');
//     const [Navigate] = useState('');
    
// // const markdown = `Just a link: https://reactjs.com.`
    


//     // function askQuestion(event) {
//     //     event.preventDefault();
//     //     axios.post('/questions', {
//     //         title: questionTitle,
//     //         content: questionBody,
//     //     }, {withCreditals:true})
//     //     .then(response => {
//     //         console.log(response.data);
//     //         Navigate('/questions'+response.data);

//     //     });
//     // }
    
    

//     function question(e) {
//         e.preventDefault();
//         axios.post('/questions', {
//             title: questionTitle,
//             content: questionBody,
//         }, {withCredentials: true})
//         .then(response => console.log(response));
//     }

   
//     return (
//         // <Container>
//         //     <Navigate to={'/ask'} />
//         //     <Header style={{marginBottom: '20px'}}>Ask A Question</Header>
//         //     {/* <form onSubmit={Event => PreviewQuestion(Event)}> */}
//         //         <Input type="text"
//         //         // value={questionTitle}
//         //         onChange={e => setQuestionTitle(e.target.value)}
//         //         placeholder="Title" value={questionTitle} />
                
//         //     <QuestionBodyInput
//         //     onChange={e => setQuestionBody(e.target.value)}
//         //     placeholder="More information about your question." value={questionBody} />
//         //     <PreviewQuestion>
//         //         {/* <ReactMarkdown plugins={[remarkGfm]} children={questionBody} /> */}
//         //     </PreviewQuestion>
            
//         //     <BlueButton type={'submit'}>Submit Question</BlueButton>
//         //     {/* </form> */}
//         <Container>
//         <main>
//             <Navigate to={'/ask'} />
//             <h1>Ask a Question</h1>
//         <Input type="text" 
//             value={questionTitle} 
//             onChange={e => setQuestionTitle(e.target.value)}
//             placeholder="Title of your question" />
//             <QuestionBodyInput 
//                 onChange={e => setQuestionBody(e.target.value)}
//                 placeholder="Question?">{questionBody}</QuestionBodyInput>
//             <PreviewQuestion>
//             <Markdown plugins={[remarkGfm]} children={question()} />
//             </PreviewQuestion>
//             <AskBlueButton style={{marginTop:'20px'}}>Submit</AskBlueButton>
        
        
//         </main>
        
//             </Container>
            
       
//     );
// }
    

// export default AskPage;