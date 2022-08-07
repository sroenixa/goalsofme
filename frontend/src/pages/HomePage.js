import React, { useState } from 'react'
import Header from '../components/home/Header'
import Goals from '../components/home/Goals'

import HomePageLayout from '../layouts/HomePageLayout'
import AddGoal from '../components/home/AddGoal'
import BottomMenu from '../components/shared/BottomMenu'

const HomePage = (props) => {
  const [isAddActive, setIsAddActive] = useState(false);

  return (
    <HomePageLayout>
        <div className="home-page">
          <Header/>
          <Goals/>
          <BottomMenu active={isAddActive} setactive={setIsAddActive}/>
          <AddGoal {...props} active={isAddActive}/>
        </div>
    </HomePageLayout>
  )
}

export default HomePage