import { useContext } from 'react'
import { ThemeContext } from '../App'
import '../stylesheets/FooterContent.css'
import githubIcon from '../images/github-icon.png'

function FooterContent() {

  const { darkMode } = useContext(ThemeContext)
  const handleThemeFooterBox = darkMode == false ? 'footer' : 'footer dark'
  const handleThemeFooterIcon = darkMode == false ? 'github-icon' : 'github-icon dark'

  return (
    <footer className={handleThemeFooterBox}>
      <p className='footer-text'>created by José Daniel Romero <a title='Github page' href='https://github.com/JoseDanielRomero' target='_blank'><img src={githubIcon} className={handleThemeFooterIcon} alt='Github page'/></a> - frontendmentor.io</p>
    </footer>
  )
}

export default FooterContent;