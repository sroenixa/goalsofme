import React, { useContext } from 'react'
import ThemeContext from '../../context/theme/themeContext';
import sunSvg from '../../assets/svg/sun.svg';
import nightSvg from '../../assets/svg/night.svg'

const ThemeSelector = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const onClick = () => {
    console.log(darkMode)
    localStorage.setItem('dark-mode',!darkMode)
    if (darkMode)
      theme.dispatch({ type: "LIGHT" });
    else
      theme.dispatch({ type: "DARK" });
  };

  return (
    <div className='theme-selector'>
         {  !darkMode ?  <img src={sunSvg} alt="sun_svg" onClick={onClick}/> : <img src={nightSvg} alt="night_svg" onClick={onClick}/> }
    </div>
  )
}

export default ThemeSelector