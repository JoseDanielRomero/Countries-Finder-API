import CountryPage from './routes/CountryPage'
import HomePage from './routes/HomePage'
import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

export const DatabaseContext = createContext(null)

function App() {

  const [database, setDatabase] = useState([])

  return (
    <>
      <DatabaseContext.Provider value={{ database, setDatabase }}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country' element={<CountryPage />} />
          </Routes>
        </HashRouter>
      </DatabaseContext.Provider>
    </>
  )
}

export default App;