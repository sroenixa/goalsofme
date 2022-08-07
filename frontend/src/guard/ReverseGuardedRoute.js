import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {  useSelector } from 'react-redux';

const ReverseGuardedRoute = ({ component: Component, ...rest }) => {
const state = useSelector(state => state);
  return (
    <Route {...rest} render={(props) => (
        (typeof state.tokenStore.auth.token != 'undefined') === true
            ?  <Redirect to='/' />
            :  <Component {...props} />
    )} />
  )
}

export default ReverseGuardedRoute