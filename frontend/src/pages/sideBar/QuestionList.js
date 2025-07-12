import React from 'react'
import Question from './Question'



function QuestionList({questionList}) {
  // console.log(QuestionList)
  return (
    <>
    {questionList.map((question)=>(
      <Question question={question} key ={question._id}/>
    ))}
    </>
  )
}

export default QuestionList