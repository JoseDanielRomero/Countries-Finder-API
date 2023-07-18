import { useContext } from 'react';
import { ThemeContext } from '../App'
import FooterContent from '../components/FooterContent';
import HeaderContent from '../components/HeaderContent';
import '../stylesheets/ErrorContent.css'

function ErrorContent() {

  const { darkMode } = useContext(ThemeContext)
  const handleThemeMain = darkMode == false ? 'main-country' : 'main-country dark'

  return (
    <div className='ErrorPage'>
      <HeaderContent />
      <main className={handleThemeMain}>

      </main>
      <FooterContent />
    </div>
  )
}

export default ErrorContent;