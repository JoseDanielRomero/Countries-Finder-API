import '../stylesheets/Navbar.css'
import searchIcon from '../images/loupe.png'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { RegionContext } from '../App'
import { DatabaseContext } from '../App'

function Navbar({ options }) {

  const { database, setDatabase } = useContext(DatabaseContext)
  const { darkMode } = useContext(ThemeContext)
  const { actualRegion, setActualRegion } = useContext(RegionContext)

  const handleThemeSearch = darkMode == false ? 'search-container' : 'search-container dark'
  const handleThemeImage = darkMode == false ? 'input-image' : 'input-image dark'
  const handleThemeInput = darkMode == false ? 'input-search' : 'input-search dark'
  const handleThemeSelectbox = darkMode == false ? 'selectbox-container' : 'selectbox-container dark'

  const handleChangeSelectbox = (event) => {
    setActualRegion(event.target.value)
  }

  return (
    <nav className='navbar-home'>
      <form className={handleThemeSearch} id='input-search-from'>
        <button type='submit' className='input-submit' >
          <img className={handleThemeImage} src={searchIcon} />
        </button>
        <input type='text' className={handleThemeInput} placeholder='Search for a country...'/>
      </form>
      <select value={actualRegion} className={handleThemeSelectbox} onChange={handleChangeSelectbox} >
        {options.map(option => (

          <option key={option.value} value={option.value}>
            {option.text}
          </option>

        ))}
      </select>
    </nav>
  )
}

export default Navbar;