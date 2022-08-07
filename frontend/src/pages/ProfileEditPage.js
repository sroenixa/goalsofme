import React  from 'react'
import Header from '../components/profile-edit/Header'
import AccountPageLayout from '../layouts/AccountPageLayout'
import UpdateForm from '../components/profile-edit/UpdateForm'
import BottomMenu from '../components/shared/BottomMenu'

const ProfileEditPage = (props) => {
  return (
    <AccountPageLayout>
        <div className="profile-edit-page">
            <Header/>
            <UpdateForm {...props}/>
            <BottomMenu addactive={true}/>
        </div>
    </AccountPageLayout>  
  )
}

export default ProfileEditPage