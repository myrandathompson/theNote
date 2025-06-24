import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const QuestionStat = styled.div`
text-align: center;
display: inline-block;
font-size 35px;
color: white;
span{
    font-size: 15px;
    display: block;
    font-weight: 300;
    margin-top: 4px;
}
`;


const QuestionTitleArea = styled.div`
padding: 0 30px;
background-color: grey;
`;

const QuestionLink = styled(Link)`
text-decoration: none;
color: white;
font-size: 25px;
display: block;
margin-bottom: 5px;
`;


const Tag = styled.span`
display: inline-block;
margin-right: 5px;
background-color: 3e4a52;
color: darkblue;
padding: 7px;
border-radius: 4px;
font-size: .9rem;
`;


const StyledQuestionRow = styled.div`
background-color: grey;
padding: 15px 15px 10px;
display: grid;
grid-template-columns: repeat(3, 50px) 1fr;
border-top: 1px solid #555;
`;

const WhoandWhen = styled.div`
dispaly: inline-block;
color: white;
font-size: 14px;
float: right;
padding: 10px 0;
`;

const UserLink = styled.a`
color: blue;
`;


function QuestionRow({title,id}) {
    return (
        <StyledQuestionRow>
            <QuestionStat>8<span>votes</span></QuestionStat>
        <QuestionStat>1<span>answers</span></QuestionStat>
        <QuestionStat>6<span>views</span></QuestionStat>
        <QuestionTitleArea>
            <QuestionLink to={'questions/'}>{title}</QuestionLink>
            <Tag>javascript</Tag>
            <Tag>parsing</Tag>
            <Tag>quotes</Tag>
            <Tag>literals</Tag>
            <WhoandWhen>asked 2 mins ago <UserLink>User</UserLink>
            </WhoandWhen>
        </QuestionTitleArea>
        </StyledQuestionRow>
    );
}

QuestionRow.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default QuestionRow;