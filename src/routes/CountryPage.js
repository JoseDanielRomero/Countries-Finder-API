import { useContext } from 'react';
import { DatabaseContext } from '../App'
import '../stylesheets/CountryPage.css'

function CountryPage() {

  const { database, setDatabase } = useContext(DatabaseContext)

  console.log(database)

  return (
    <div className='CountryPage'>

    </div>
  )
}

export default CountryPage;