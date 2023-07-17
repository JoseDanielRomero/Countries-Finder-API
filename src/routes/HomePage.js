import { NavLink } from 'react-router-dom';
import { DatabaseContext, RegionContext, ThemeContext, CountryContext } from '../App';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import '../stylesheets/HomePage.css'
import HeaderContent from '../components/HeaderContent';
import Navbar from '../components/Navbar';
import CountryCard from '../components/CountryCard';
import FooterContent from '../components/FooterContent';

function HomePage({ options }) {

  const { database, setDatabase } = useContext(DatabaseContext)
  const { darkMode } = useContext(ThemeContext)
  const { actualRegion, setActualRegion } = useContext(RegionContext)
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext)

  useEffect(() => {

    const obtainData = async() => {

      const url = 'https://restcountries.com/v3.1/' + actualRegion
      const api = await axios.get(url)
      setDatabase(api.data)

    }

    obtainData()

  },[actualRegion])  

  console.log(database)

  const handleClassThemeMain = darkMode == false ? 'main-home' : 'main-home dark'
  const handleThemeCard = darkMode == false ? 'country-card-container' : 'country-card-container dark'

  return (
      <div className='HomePage'>
        <HeaderContent />
        <main className={handleClassThemeMain}>
          <Navbar options={options} />
          <section className='main-content-section'>
            {database.map(card => {

              const handleClickCard = () => {
                setSelectedCountry(card.cca3)
              }

              return (
                <NavLink to='/country' className='navlink' key={card.cca3}  onClick={handleClickCard} >
                  <article className={handleThemeCard} >
                    <CountryCard
                      countryName = {card.name.common}
                      countryPopulation= {card.population}
                      countryRegion = {card.region}
                      countryCapital = {card.capital}
                      countryFlag = {card.flags.png}
                    />
                  </article>
                </NavLink>
              )}
            )}
          </section>
        </main>
        <FooterContent />
      </div>
  )
}

export default HomePage;