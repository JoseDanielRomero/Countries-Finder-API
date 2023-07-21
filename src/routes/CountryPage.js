import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ThemeContext } from '../App'
import FooterContent from '../components/FooterContent';
import HeaderContent from '../components/HeaderContent';
import backIcon from '../images/back.png'
import '../stylesheets/CountryPage.css'

function CountryPage() {

  const params = useParams()
  const [requestCountry, setRequestCountry] = useState([])
  const { darkMode } = useContext(ThemeContext)

  useEffect(()=> {

    const obtainCountry = async() => {
      const url = 'https://restcountries.com/v3.1/alpha/' + params.idCountry
      const apiRequest = await axios.get(url)
        .then((apiRequest) => {
          setRequestCountry(apiRequest.data)
        })
        .catch(() => {
          console.log('Error 400, invalid country.')
        });
    }
    obtainCountry()

  },[params])

  const handleThemeMain = darkMode == false ? 'main-country' : 'main-country dark'
  const handleThemeBackButton = darkMode == false ? 'back-button' : 'back-button dark'
  const handleThemeBackButtonIcon = darkMode == false ? 'back-button-image' : 'back-button-image dark'
  const handleThemeInfoTitle = darkMode == false ? 'country-result-info-title' : 'country-result-info-title dark'
  const handleThemeItem = darkMode == false ? 'country-result-info-item' : 'country-result-info-item dark'
  const handleThemeBorderButtons = darkMode == false ? 'border-countries-button' : 'border-countries-button dark'
  const handleThemeBorderTitle = darkMode == false ? 'country-result-info-border-title' : 'country-result-info-border-title dark'

  return (
    <div className='CountryPage'>
      <HeaderContent />
      <main className={handleThemeMain}>
        <nav className='navbar-country'>
          <NavLink to='/'className={handleThemeBackButton}>
            <img src={backIcon} className={handleThemeBackButtonIcon} />
            <p style={{fontSize: '.9rem'}}>Back</p>
          </NavLink>
        </nav>
        {requestCountry.length == 0 && <article className='loader-container-country'><div className='loader-country'></div></article>}

        {requestCountry.map(country => {

          const copyNativeName = {...country.name.nativeName}
          const keysNative = Object.keys(copyNativeName)
          const firstNativeKey = keysNative[0]

          const copyLanguages = {...country.languages}
          const keysLanguages = Object.values(copyLanguages)
          const resultIteration = []
          for (let i=0; i<keysLanguages.length; i++) {
            resultIteration.push(keysLanguages[i])
          }
          const languagesFormat = resultIteration.join(', ')

          const copyCurrencies = {...country.currencies}
          const keysCurrencies = Object.values(copyCurrencies)
          const resultIteration2 = []
          for (let i=0; i<keysCurrencies.length; i++) {
            resultIteration2.push(keysCurrencies[i].name)
          }
          const currenciesFormat = resultIteration2.join(', ')

          const copyCountry = {...country}
          const keysCountry = Object.keys(copyCountry)
          let borderCountries
          if (keysCountry.includes('borders')) {
            borderCountries = [...country.borders]
          } else {
            borderCountries = []
          }

          if (keysCountry.length > 28) {
            return (
              <article className='country-result-container' key={country.cca3}>
                <img className='country-result-image' src={country.flags.png} />
                <section className='country-result-info-box'>
                  <h2 className={handleThemeInfoTitle}>{country.name.common}</h2>
                  <div className='country-result-info-text'>
                    <div className='country-result-info-column'>
                      <p className={handleThemeItem}><b>Native name: </b>{country.name.nativeName[firstNativeKey].common}</p>
                      <p className={handleThemeItem}><b>Population: </b>{country.population}</p>
                      <p className={handleThemeItem}><b>Region: </b>{country.region}</p>
                      <p className={handleThemeItem}><b>Sub Region: </b>{country.subregion}</p>
                    </div>
                    <div className='country-result-info-column'>
                      <p className={handleThemeItem}><b>Capital: </b>{country.capital}</p>
                      <p className={handleThemeItem}><b>Top Level Domain: </b>{country.tld}</p>
                      <p className={handleThemeItem}><b>Currencies: </b>{currenciesFormat}</p>
                      <p className={handleThemeItem}><b>Languages: </b>{languagesFormat}</p>
                    </div>
                  </div>
                  <div className='country-result-info-border-box'>
                    <p className={handleThemeBorderTitle}><b>Border Countries:</b></p>
                    <div className='country-result-info-border'>
                    {borderCountries.map(border => {
                      const navlinkTo = '/country/' + (border).toLowerCase()
                      const lowerCase = (border).toLowerCase()
                      const firstLetter = lowerCase.charAt(0)
                      const firstLetterCap = firstLetter.toUpperCase()
                      const remainingLetters = lowerCase.slice(1)
                      const capitalizedWord = firstLetterCap + remainingLetters

                      return (
                        <NavLink to={navlinkTo} className={handleThemeBorderButtons} key={border}>
                          {capitalizedWord}
                        </NavLink>
                      )}
                    )}
                    </div>
                  </div>
                </section>
              </article>
          )} else {
            return (
              <article className='country-result-container' key={country.cca3}>
                <img className='country-result-image' src={country.flags.png} />
                <section className='country-result-info-box'>
                  <h2 className={handleThemeInfoTitle}>{country.name.common}</h2>
                  <div className='country-result-info-text'>
                    <div className='country-result-info-column'>
                      <p className={handleThemeItem}><b>Population: </b>{country.population}</p>
                    </div>
                  </div>
                  <div className='country-result-info-border-box'>
                    <p className={handleThemeBorderTitle}><b>Border Countries:</b></p>
                  </div>
                </section>
              </article>
          )}
        })}
      </main>
      <FooterContent />
    </div>
  )
}

export default CountryPage;