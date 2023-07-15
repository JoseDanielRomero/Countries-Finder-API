import CountryPage from './routes/CountryPage'
import HomePage from './routes/HomePage'
import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

export const DatabaseContext = createContext(null)
export const ThemeContext = createContext(false)

function App() {

  const [database, setDatabase] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <DatabaseContext.Provider value={{ database, setDatabase }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <HashRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/country' element={<CountryPage />} />
            </Routes>
          </HashRouter>
        </ThemeContext.Provider>
      </DatabaseContext.Provider>
    </>
  )
}

export default App;