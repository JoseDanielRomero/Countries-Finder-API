import { useContext } from 'react'
import { ThemeContext } from '../App'
import '../stylesheets/HeaderContent.css'

function HeaderContent() {

  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleClassThemeLogo = darkMode == false ? 'logo' : 'logo dark'

  const theme = darkMode == false ? 'light' : 'dark'
  const formatedUrl = require(`../images/moon-${theme}.png`)

  const handleClassThemeHeader = darkMode == false ? 'header' : 'header dark'
  const handleClassThemeTitle = darkMode == false ? 'button-theme-title' : 'button-theme-title dark'

  const handleClickThemeButton = () => {
    if (darkMode == false) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  return (
    <header className={handleClassThemeHeader}>
      <h1 className={handleClassThemeLogo}>Where in the world?</h1>
      <button className='button-theme' onClick={handleClickThemeButton}>
        <img src={formatedUrl} className='button-theme-image' />
        <h5 className={handleClassThemeTitle}>Dark mode</h5>
      </button>
    </header>
  )
}

export default HeaderContent