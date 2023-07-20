import { NavLink } from 'react-router-dom';
import { DatabaseContext, RegionContext, ThemeContext } from '../App';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import '../stylesheets/HomePage.css'
import HeaderContent from '../components/HeaderContent';
import Navbar from '../components/Navbar';
import CountryCard from '../components/CountryCard';
import FooterContent from '../components/FooterContent';

function HomePage({ options }) {

  const { database, setDatabase } = useContext(DatabaseContext)
  const { darkMode } = useContext(ThemeContext)
  const { actualRegion, setActualRegion } = useContext(RegionContext)

  const windowWidth = useRef(window.innerWidth)
  const windowWidthFix = windowWidth.current

  useEffect(() => {

    const obtainData = async() => {

      const url = 'https://restcountries.com/v3.1/' + actualRegion
      const api = await axios.get(url)
        .then((api) => {
          setDatabase(api.data)
        })
        .catch(() => {
          console.log('Error 404, no results found.')
          setDatabase([])
        });
      

    }

    obtainData()

  },[actualRegion])  

  const handleClassThemeMain = (width) => {
    const copyDatabase = [...database]
    let baseClass = 'main-home'

    if (darkMode == true) {
      baseClass = baseClass + ' dark'
    }
    
    if (width < 480) {
      if (copyDatabase.length < 2) {
        baseClass = baseClass + ' reduced-height'
      } else {
        baseClass = baseClass + ' normal-height'
      }
    } else {
      if (copyDatabase.length < 5) {
        baseClass = baseClass + ' reduced-height'
      } else {
        baseClass = baseClass + ' normal-height'
      }
    }

    return baseClass
  }
  
  const handleThemeCard = darkMode == false ? 'country-card-container' : 'country-card-container dark'

  return (
      <div className='HomePage'>
        <HeaderContent />
        <main className={handleClassThemeMain(windowWidthFix)}>
          <Navbar options={options} />
          <section className='main-content-section'>
            {database.map(card => {

              const navlinkTo = '/country/' + (card.cca3).toLowerCase()

              return (
                <NavLink to={navlinkTo} className='navlink' key={card.cca3} >
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