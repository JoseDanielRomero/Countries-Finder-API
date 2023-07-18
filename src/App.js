import CountryPage from './routes/CountryPage'
import HomePage from './routes/HomePage'
import { createContext, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorContent from './routes/ErrorContent';

export const DatabaseContext = createContext(null)
export const ThemeContext = createContext(false)
export const RegionContext = createContext('')

function App() {
  const options = [
    {value: 'all', text: 'Filter by region'},
    {value: 'region/africa', text: 'Africa'},
    {value: 'region/america', text: 'America'},
    {value: 'region/asia', text: 'Asia'},
    {value: 'region/europe', text: 'Europe'},
    {value: 'region/oceania', text: 'Oceania'}
  ]

  const [database, setDatabase] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [actualRegion, setActualRegion] = useState(options[0].value)

  return (
    <>
      <DatabaseContext.Provider value={{ database, setDatabase }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <RegionContext.Provider value={{ actualRegion, setActualRegion }}>
            <HashRouter>
              <Routes>
                <Route path='/' element={<HomePage options={options} />} />
                <Route path='/country/:idCountry' element={<CountryPage />} />
                <Route path='/404' element={<ErrorContent />} />
                <Route path='*' element={<Navigate to='/404' />} />
              </Routes>
            </HashRouter>
          </RegionContext.Provider>
        </ThemeContext.Provider>
      </DatabaseContext.Provider>
    </>
  )
}

export default App;