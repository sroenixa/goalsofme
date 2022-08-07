import React, { useState } from 'react'
import Header from '../components/profile/Header'
import AccountPageLayout from '../layouts/AccountPageLayout'
import Logout from '../components/profile/Logout'
import BottomMenu from '../components/shared/BottomMenu'
import Content from '../components/profile/Content'

const ProfileEditPage = (props) => {
   const [isModalActive, setIsModalActive] = useState(false);
  return (
    <AccountPageLayout>
        <div className="profile-page">
            <div className='profile'>
                <Header/>
                <Content active={isModalActive} setactive={setIsModalActive} />
            </div>
            <BottomMenu addactive={true}/>
            <Logout active={isModalActive} setactive={setIsModalActive} {...props}/>
        </div>
    </AccountPageLayout>  
  )
}

export default ProfileEditPage