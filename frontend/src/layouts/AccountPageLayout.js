import React, { useContext } from 'react'
import Alert from '../components/shared/Alert'
import LanguageSelector from '../components/shared/LanguageSelector';
import ThemeSelector from '../components/shared/ThemeSelector'
import ThemeContext from '../context/theme/themeContext';

const AccountPageLayout = ({children}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`${darkMode ? "light" : "dark"}`}>
        <Alert/>
        <ThemeSelector/>
        <LanguageSelector/>
        {children}
    </div>
  )
}

export default AccountPageLayout