import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CountryContext, ThemeContext } from '../App'
import FooterContent from '../components/FooterContent';
import HeaderContent from '../components/HeaderContent';
import backIcon from '../images/back.png'
import '../stylesheets/CountryPage.css'

function CountryPage() {

  const [requestCountry, setRequestCountry] = useState(null)
  const { darkMode } = useContext(ThemeContext)
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext)

  useEffect(()=> {

    const obtainCountry = async() => {

      const formatCode = selectedCountry.toLowerCase()
      const url = 'https://restcountries.com/v3.1/alpha/' + formatCode
      const apiRequest = await axios.get(url)

      setRequestCountry(apiRequest.data[0])

    }

    obtainCountry()

  },[selectedCountry])

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
        <article className='country-result-container'>

        </article>
      </main>
      <FooterContent />
    </div>
  )
}

export default CountryPage;