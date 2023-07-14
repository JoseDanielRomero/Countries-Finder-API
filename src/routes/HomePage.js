import { NavLink } from 'react-router-dom';
import { DatabaseContext } from '../App';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import '../stylesheets/HomePage.css'

function HomePage() {

  const { database, setDatabase } = useContext(DatabaseContext)

  useEffect(() => {

    const obtainData = async() => {

      const url = 'https://restcountries.com/v3.1/all'
      const api = await axios.get(url)

      setDatabase(api.data)

    }

    obtainData()

  },[])  

  console.log(database)

  return (
      <div className='HomePage'>
        
      </div>
  )
}

export default HomePage;