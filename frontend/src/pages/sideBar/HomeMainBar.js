import React from 'react'
import './HomeMainBar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'
function HomeMainBar() {
  const user = useSelector((state)=>state.currentUserReducer)
  const location = useLocation();
  const navigate = useNavigate();
  const questionList = useSelector((state)=>state.questionReducer)
  // console.log(questionlist)
  const checkAuth = () => {
    if (user === null) {
      alert("Login or signup to ask a question")
      navigate("/auth")
    } else {
      navigate("/askquestion")
    }
  }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className="ask-btn" onClick={checkAuth}>Ask Questions</button>
      </div>
      <div>
        {questionList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.data.length} questions</p>
            <questionlist questionList={questionList.data} />
          </>
        )
        }</div>
    </div>
  )
}

export default HomeMainBar