import { useContext } from 'react';
import { DatabaseContext } from '../App'
import HeaderContent from '../components/HeaderContent';
import '../stylesheets/CountryPage.css'

function CountryPage() {

  const { database, setDatabase } = useContext(DatabaseContext)

  console.log(database)

  return (
    <div className='CountryPage'>
      <HeaderContent />
    </div>
  )
}

export default CountryPage;