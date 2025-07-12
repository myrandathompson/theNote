import React,{useState} from 'react'
import moment from 'moment'
import copy from "copy-to-clipboard"
// import upvote from "../../assets/sort-up.svg"
// import downvote from "../../assets/sort-down.svg"
import './Question.css'
// import Avatar from '../../Comnponent/Avatar/Avatar'
import Displayanswer from './DisplayAnswer'
import { useSelector, useDispatch } from "react-redux"
import { Link ,useNavigate,useLocation,useParams} from 'react-router-dom'
import {deletequestion,voteQuestion,postAnswer} from '../../actions/question'
import './QuestionsPage.css'



const QuestionDetails = () => {
    const [answer, setAnswer] = useState("")
    const dispatch = useDispatch()
    const questionList = useSelector((state) => state.questionReducer)
    const { id } = useParams();
    const user = useSelector((state) => state.currentUserReducer)
    const location = useLocation()
    const navigate = useNavigate()
    const url = "http://localhost:3000"
    const handlePostAns = (e, answerlength) => {
        e.preventDefault();
        if(user === null) {
            alert("Login or Signup to answer a question")
            navigate('/auth')
        }else{
            if(answer === "") {
                alert("Enter an answer before submitting")
            }else{
                dispatch(postAnswer({id,
                    noOfAnswers: answerlength+1,
                    answerBody: answer,
                    userId: user.result._id,                 
                    userAnswered: user.result.name}));
                setAnswer("")
            }
        }
    }
    const handleShare = () => {
        copy(url + location.pathname);
        alert("Copied url :" + url + location.pathname)
    }

    const handleDelete = () => {
        dispatch(deletequestion(id, navigate))
    }
    const handleUpVote = () => {
        if(user === null){
            alert("Login or Signup to answer a question")
            navigate('/auth')
        }else{
            dispatch(voteQuestion(id))
        }
    }
    const handleDownVote = () => {
        if(user === null){
            alert("Login or Signup to answer a question")
            navigate('/auth')
        }else{
            dispatch(voteQuestion(id))
        }
    }
  return (
    <div className="question-details-page">
        {questionList.data === null ?(
            <h1>Loading...</h1>
        ):(
            <>
            {questionList.data.filter((question)=> question._id=== id ).map((question)=>(
                <div key={question._id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitile}</h1>
                        <div className="question-details-container-2">
                            <div style={{width:"100%"}}>
                                <p className='question-body'>{question.questionBody}</p>
                                <div className="question-details-tags">
                                    {question.questionTags.map((tag)=>(
                                        <p key={tag}>{tag}</p>
                                    ))}
                                </div>
                                <div className="question-actions-user">
                                    <div>
                                        <button type='button' onClick={handleShare}>
                                            Share
                                        </button>
                                        {user?.result?._id ===question?.userid && (
                                            <button type='button' onClick={handleDelete}>Delete</button>
                                        )}
                                    </div>
                                    <div>
                                        <p>Asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`Users/${question.userid}`} className='user-limk' style={{color:"#0086d8"}}>
                                        <div>{question.userPosted}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {question.noOfAnswers !== 0 && (
                        <section>
                            <h3>{question.noOfAnswers} Answers</h3>
                            <Displayanswer key={question._id} question={question} handleShare={handleShare}/>
                        </section>
                    )}
                    <section className="post-ans-container">
                        <h3>Your Answer</h3>
                        <form onSubmit={(e)=>{
                            handlePostAns(e, question.answer.length)
                        }}>
                            <textarea name="" id="" cols="30" rows="10" vlaue={answer} onChange={(e)=>setAnswer(e.target.value)}></textarea>
                        <br />
                        <input type="submit" className="post-ans-btn" value="Post your Answer"/>
                        </form>
                        <p>Browse other Question tagged
                            {question.questionTags.map((tag)=>(
                                <Link to="/Tags" key={tag} className='ans-tag'>
                                    {" "}
                                    {tag}{" "}
                                </Link>
                            ))}{" "}
                            or 
                            <Link to="/ask" style={{textDecoration:"none",color:"#009dff"}}>
                            {" "}
                            Ask your own question
                            </Link>
                        </p>
                    </section>
                </div>
            ))}
            </>
        )}
    </div>
  )
}

export default QuestionDetails