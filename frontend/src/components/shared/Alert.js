import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
    const {alert} = useContext(AlertContext)
  return (
    alert !== null && (
        <div className={`global-message ${alert.type}`}>
            {alert.msg}
        </div>
    )
  )
}

export default Alert