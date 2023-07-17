import CountryPage from './routes/CountryPage'
import HomePage from './routes/HomePage'
import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

export const DatabaseContext = createContext(null)
export const ThemeContext = createContext(false)
export const RegionContext = createContext(null)
export const CountryContext = createContext(null)

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
  const [selectedCountry, setSelectedCountry] = useState('ECU')

  return (
    <>
      <DatabaseContext.Provider value={{ database, setDatabase }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <RegionContext.Provider value={{ actualRegion, setActualRegion }}>
            <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
              <HashRouter>
                <Routes>
                  <Route path='/' element={<HomePage options={options} />} />
                  <Route path='/country' element={<CountryPage />} />
                </Routes>
              </HashRouter>
            </CountryContext.Provider>
          </RegionContext.Provider>
        </ThemeContext.Provider>
      </DatabaseContext.Provider>
    </>
  )
}

export default App;