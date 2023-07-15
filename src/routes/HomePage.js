import { NavLink } from 'react-router-dom';
import { DatabaseContext, ThemeContext } from '../App';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import '../stylesheets/HomePage.css'
import HeaderContent from '../components/HeaderContent';
import Navbar from '../components/Navbar';

function HomePage() {

  const { database, setDatabase } = useContext(DatabaseContext)
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {

    const obtainData = async() => {

      const url = 'https://restcountries.com/v3.1/all'
      const api = await axios.get(url)

      setDatabase(api.data)

    }

    obtainData()

  },[])  

  const handleClassThemeMain = darkMode == false ? 'main-home' : 'main-home dark'

  console.log(database)

  return (
      <div className='HomePage'>
        <HeaderContent />
        <main className={handleClassThemeMain}>
          <Navbar />
        </main>
      </div>
  )
}

export default HomePage;