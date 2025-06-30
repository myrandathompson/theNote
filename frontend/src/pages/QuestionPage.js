import styled from "styled-components";
import {useEffect,useState} from 'react';
import axios from 'axios';
import Header from "./Header";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Container = styled.div`
padding: 30px 20px;
`;

function questionPage({match}) {
    const [question,setQuestion] = useState(false)
    function fetchQuestion() {
        axios.get('./questions'+match.params.id)
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
                <ReactMarkdown plugins={[remarkGfm]} children={question} />
                </>
            


            )}
            
        </Container>
        
        
        </>
    );
}

export default questionPage