import React from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
// import Avatar from '../../Comnponent/Avatar/Avatar'
import { useDispatch ,useSelector} from 'react-redux'
import { deleteAnswer } from '../../actions/question'


const DisplayAnswer = ({ question, handleShare }) => {
  const user =useSelector((state) => state.currentUserReducer)
  const {id}=useParams();
  const dispatch=useDispatch()
  
  
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers -1))
  }
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type='button' onClick={handleShare} >Share</button>
              {user?.result?._id === ans?.userid && (
                <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
              )}
            </div>
            <div>
            <p>answered {moment(ans.answeredOn).fromNow()}</p>
            <Link to={`Users/${ans.userid}`} className='user-limk' style={{ color: "#0086d8" }}>
              <div>{ans.userAnswered}</div>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayAnswer