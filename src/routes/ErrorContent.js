import { useContext } from 'react';
import { ThemeContext } from '../App'
import FooterContent from '../components/FooterContent';
import HeaderContent from '../components/HeaderContent';
import '../stylesheets/ErrorContent.css'
import errorIcon from '../images/404.png'
import { Link } from 'react-router-dom';

function ErrorContent() {

  const { darkMode } = useContext(ThemeContext)
  const handleThemeMain = darkMode == false ? 'main-error' : 'main-error dark'
  const handleThemeIconError = darkMode == false ? 'main-error-image' : 'main-error-image dark'
  const handleThemeTitleError = darkMode == false ? 'main-error-title' : 'main-error-title dark'
  const handleThemeLink = darkMode == false ? 'main-error-link' : 'main-error-link dark'

  return (
    <div className='ErrorPage'>
      <HeaderContent />
      <main className={handleThemeMain}>
        <img className={handleThemeIconError} src={errorIcon} />
        <h2 className={handleThemeTitleError}>Not the country you were looking for.</h2>
        <Link to='/' className={handleThemeLink}>Back Home</Link>
      </main>
      <FooterContent />
    </div>
  )
}

export default ErrorContent;