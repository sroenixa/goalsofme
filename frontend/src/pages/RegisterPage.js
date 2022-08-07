import React from 'react'
import Bottom from '../components/register/Bottom'
import Header from '../components/register/Header'
import RegisterForm from '../components/register/RegisterForm'
import AccountPageLayout from '../layouts/AccountPageLayout'

const RegisterPage = (props) => {
  return (
    <AccountPageLayout>
        <div className="register-page">
            <Header/>
            <RegisterForm {...props}/>
            <Bottom/>
        </div>
    </AccountPageLayout>  
  )
}

export default RegisterPage