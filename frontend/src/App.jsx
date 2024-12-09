import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'

function App() {
 

  return (
   <>
      <Header />
      
      
      <main>
        <Outlet />
      </main>


      <Footer />
   </>
  )
}

export default App
