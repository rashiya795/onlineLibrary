import React from 'react'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

import bookStore from './Components/BookStore'

export default function App() {
  return (
    <>
    <div className='bg-rose-300 h-full w-full'>
    
<Navbar/>
    
     <Outlet/>
     <Footer/>
   
    </div>
    </>
    
  )
}
