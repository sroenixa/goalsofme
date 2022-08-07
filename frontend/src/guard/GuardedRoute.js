import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {  useSelector } from 'react-redux';

const GuardedRoute = ({ component: Component, ...rest }) => {
const state = useSelector(state => state);
  return (
    <Route {...rest} render={(props) => (
        (typeof state.tokenStore.auth.token != 'undefined') === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
  )
}

export default GuardedRoute