import { useContext } from 'react'
import { ThemeContext } from '../App'
import '../stylesheets/FooterContent.css'

function FooterContent() {

  const { darkMode } = useContext(ThemeContext)
  const handleThemeFooterBox = darkMode == false ? 'footer' : 'footer dark'

  return (
    <footer className={handleThemeFooterBox}>
      
    </footer>
  )
}

export default FooterContent