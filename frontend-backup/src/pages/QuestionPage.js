import styled from "styled-components";
import {useEffect,useState} from 'react';
import axios from 'axios';
import Header from "./Header";
import Markdown from 'react-markdown';
import gfm from 'remark-gfm';

const Container = styled.div`
padding: 30px 20px;
`;

function questionPage({match}) {
    const [question,setQuestion] = useState({false})
    function fetchQuestion() {
        axios.get('http://localhost:3030/questions'+match.params.id)
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
                <Markdown plugins={[gfm]} children={questionBody} />
                </>
            


            )}
            
        </Container>
        
        
        </>
    );
}

export default questionPage