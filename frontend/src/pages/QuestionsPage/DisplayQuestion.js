import React from 'react'
import LeftSideBar from '../sideBar/LeftSideBar'
import RightSideBar from '../sideBar/RightSideBar'
import QuestionDetails from './QuestionDetails'


const DisplayQuestion = ({slidein}) => {
  return (
    <div className="home-container-1">
      <LeftSideBar slidein={slidein}/>
      <div className="home-container-2">
        <QuestionDetails/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default DisplayQuestion