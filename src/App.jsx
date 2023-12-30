import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import { Router } from './routes/Router'
import { LogoIntro } from './components/SplashScreen'

import './styles/global.css'

export function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      document.body.style.overflow = 'visible'
    }, 5800)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        {showSplash ? (
          <LogoIntro />
        ) : (
          <SearchProvider>
            <Router />
          </SearchProvider>
        )}
      </BrowserRouter>
    </>
  )
}
