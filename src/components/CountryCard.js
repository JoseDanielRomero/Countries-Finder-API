import { useContext } from 'react';
import { ThemeContext } from '../App';
import '../stylesheets/CountryCard.css'

function CountryCard({ countryName, countryPopulation, countryRegion, countryCapital, countryFlag }) {
  const { darkMode } = useContext(ThemeContext)

  const handleThemeCard = darkMode == false ? 'country-card-container' : 'country-card-container dark'
  const handleThemeTitle = darkMode == false ? 'country-card-title' : 'country-card-title dark'
  const handleThemeItem = darkMode == false ? 'country-card-item' : 'country-card-item dark'

  return (
    <article className={handleThemeCard}>
      <img className='country-card-image' src={countryFlag} />
      <div className='country-card-text' >
        <h3 className={handleThemeTitle}>{countryName}</h3>
        <p className={handleThemeItem}><b>Population: </b>{countryPopulation}</p>
        <p className={handleThemeItem}><b>Region: </b>{countryRegion}</p>
        <p className={handleThemeItem}><b>Capital: </b>{countryCapital}</p>
      </div>
    </article>
  )
}

export default CountryCard;