import '../stylesheets/Navbar.css'
import searchIcon from '../images/loupe.png'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Navbar() {

  const { darkMode } = useContext(ThemeContext)

  const handleThemeSearch = darkMode == false ? 'search-container' : 'search-container dark'
  const handleThemeImage = darkMode == false ? 'input-image' : 'input-image dark'
  const handleThemeInput = darkMode == false ? 'input-search' : 'input-search dark'

  return (
    <nav>
      <form className={handleThemeSearch}>
        <button type='submit' className='input-submit' >
          <img className={handleThemeImage} src={searchIcon} />
        </button>
        <input type='text' className={handleThemeInput} placeholder='Search for a country...'/>
      </form>
    </nav>
  )
}

export default Navbar;