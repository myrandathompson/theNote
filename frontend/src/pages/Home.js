import React from 'react'
import LeftSideBar from './sideBar/LeftSideBar'
import RightSideBar from './sideBar/RightSideBar'
import HomeMainBar from './sideBar/HomeMainBar'
import './App.css'

const Home = ({slidein}) => {
  return (
    <div className="home-container-1">
      <LeftSideBar slidein={slidein}/>
      <div className="home-container-2">
        <HomeMainBar/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Home