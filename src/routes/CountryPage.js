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

      setRequestCountry(apiRequest.data)

    }

    obtainCountry()

  },[requestCountry])

  console.log(requestCountry)

  const handleThemeMain = darkMode == false ? 'main-country' : 'main-country dark'
  const handleThemeBackButton = darkMode == false ? 'back-button' : 'back-button dark'
  const handleThemeBackButtonIcon = darkMode == false ? 'back-button-image' : 'back-button-image dark'

  return (
    <div className='CountryPage'>
      <HeaderContent />
      <main className={handleThemeMain}>
        <nav className='navbar-country'>
          <NavLink to='/'className={handleThemeBackButton}>
            <img src={backIcon} className={handleThemeBackButtonIcon} />
            <p>Back</p>
          </NavLink>
        </nav>

        {requestCountry.map(country => {
          return (
            <article className='country-result-container' key={country.cca3}>
              <img className='country-result-image' src={country.flags.png} />
              <section className='country-result-info-box'>

              </section>
            </article>
          )}
        )}

      </main>
      <FooterContent />
    </div>
  )
}

export default CountryPage;