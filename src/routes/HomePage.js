import { NavLink } from 'react-router-dom';
import { DatabaseContext, RegionContext, ThemeContext } from '../App';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import '../stylesheets/HomePage.css'
import HeaderContent from '../components/HeaderContent';
import Navbar from '../components/Navbar';

function HomePage({ options }) {

  const { database, setDatabase } = useContext(DatabaseContext)
  const { darkMode } = useContext(ThemeContext)
  const { actualRegion, setActualRegion } = useContext(RegionContext)

  useEffect(() => {

    const obtainData = async() => {

      const url = 'https://restcountries.com/v3.1/' + actualRegion

      const api = await axios.get(url)

      setDatabase(api.data)

    }

    obtainData()

  },[actualRegion])  

  const handleClassThemeMain = darkMode == false ? 'main-home' : 'main-home dark'

  console.log(database)

  return (
      <div className='HomePage'>
        <HeaderContent />
        <main className={handleClassThemeMain}>
          <Navbar options={options} />
        </main>
      </div>
  )
}

export default HomePage;