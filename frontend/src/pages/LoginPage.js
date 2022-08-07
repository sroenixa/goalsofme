import React from 'react'
import Bottom from '../components/login/Bottom'
import Header from '../components/login/Header'
import LoginForm from '../components/login/LoginForm'
import AccountPageLayout from '../layouts/AccountPageLayout'

const LoginPage = (props) => {
  return (
    <AccountPageLayout>
        <div className="login-page">
            <Header/>
            <LoginForm {...props}/>
            <Bottom/>
        </div>
    </AccountPageLayout>  
  )
}

export default LoginPage