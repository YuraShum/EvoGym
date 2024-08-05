import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { navLinkLabels, NavLinks } from './config/config'
import Home from './components/Page/Home/Home'
import Benefits from './components/Page/Benefits/Benefits'
import Classes from './components/Page/Classes/Classes'
import ContactUs from './components/Page/ContactUs/ContactUs'
import Footer from './components/Page/Footer/Footer'
import GlobalContextProvider from './components/ContextProvider/GlobalContextProvider'

const App = () => {


  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <GlobalContextProvider>
      <div className='app bg-gray-20 '>
        <Navbar isTopOfPage={isTopOfPage} />
        <Home/>
        <Benefits/>
        <Classes/>
        <ContactUs/>
        <Footer />
      </div>
    </GlobalContextProvider>
  )
}

export default App