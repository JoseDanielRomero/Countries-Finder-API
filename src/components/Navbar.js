import '../stylesheets/Navbar.css'
import searchIcon from '../images/loupe.png'
import { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { RegionContext } from '../App'
import { DatabaseContext } from '../App'

function Navbar({ options }) {

  const { database, setDatabase } = useContext(DatabaseContext)
  const { darkMode } = useContext(ThemeContext)
  const { actualRegion, setActualRegion } = useContext(RegionContext)
  const [search, setSearch] = useState('')

  const handleThemeSearch = darkMode == false ? 'search-container' : 'search-container dark'
  const handleThemeImage = darkMode == false ? 'input-image' : 'input-image dark'
  const handleThemeInput = darkMode == false ? 'input-search' : 'input-search dark'
  const handleThemeSelectbox = darkMode == false ? 'selectbox-container' : 'selectbox-container dark'

  const handleChangeSelectbox = (event) => {
    setActualRegion(event.target.value)
    setSearch('')
  }

  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formatSearch = 'name/' + search
    setActualRegion(formatSearch)
  }

  const handleDisabled = () => {
    if (search.length < 3) {
      return true
    } else {
      return false
    }
  }

  return (
    <nav className='navbar-home'>
      <form className={handleThemeSearch} id='input-search-from' onSubmit={handleSubmit}>
        <button type='submit' disabled={handleDisabled()} className='input-submit'>
          <img className={handleThemeImage} src={searchIcon} />
        </button>
        <input
          type='text' 
          className={handleThemeInput} 
          placeholder='Search for a country...'
          spellCheck='false'
          autoComplete='none'
          value={search}
          onChange={handleChangeInput}
        />
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