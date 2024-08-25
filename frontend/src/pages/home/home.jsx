import React from 'react'
import './home.css'
import Banner from '../../componets/banner/Banner'
import MyContest from '../../componets/mycontest/MyContest'
import AllContest from '../../componets/allContest/AllContest'

const Home = () => {
  return (
    <div>
      <Banner />
      <MyContest />
      <AllContest />
    </div>
  )
}

export default Home