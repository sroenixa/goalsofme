import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router , Switch } from 'react-router-dom'
import AlertState from './context/alert/alertState'
import LanguageState from './context/language/languageState'
import ThemeState from './context/theme/themeState'
import GuardedRoute from './guard/GuardedRoute'
import ReverseGuardedRoute from './guard/ReverseGuardedRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import store,{Persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import './style/app-base.css';
import './style/theme.css';
import ProfileEditPage from './pages/ProfileEditPage'
import Profile from './pages/Profile'
import GoalsPage from './pages/GoalsPage'
import EditGoalPage from './pages/EditGoalPage'
import GoalDetailPage from './pages/GoalDetailPage'
const App = () => {

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <LanguageState>
      <ThemeState>
            <AlertState>
              <Router >
                  <Switch>
                      <GuardedRoute exact path="/" component={ HomePage } />
                      <GuardedRoute exact path="/profile-edit" component={ ProfileEditPage } />
                      <GuardedRoute exact path="/goal-edit/:id" component={ EditGoalPage } />
                      <GuardedRoute exact path="/goal/:id" component={ GoalDetailPage } />
                      <GuardedRoute exact path="/profile" component={ Profile } />
                      <GuardedRoute exact path="/goals" component={ GoalsPage } />
                      <ReverseGuardedRoute exact path="/login" component={ LoginPage } />
                      <ReverseGuardedRoute exact path="/register" component={ RegisterPage } />
                  </Switch>
              </Router>
            </AlertState>
          </ThemeState>
      </LanguageState>  
    </PersistGate>
    </Provider>
  )
}

export default App
