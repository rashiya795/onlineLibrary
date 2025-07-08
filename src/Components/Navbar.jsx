import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      
      <header>
      <nav className="bg-rose-100 flex  items-center h-15 gap-3 w-full">
          <div className="w-[25%]">
              <h1 className="text-4xl font-mono font-semibold ml-1.5">
        <span className="text-red-900 font-mono">r</span>
        <span className="text-yellow-900 font-mono">e</span>
        <span className="text-green-900 font-mono">a</span>
        <span className="text-blue-900 font-mono">d</span>
      </h1>
      
          </div>
          <div className="w-[70%] flex justify-end">
              <ul className="flex justify-around gap-3 md:gap-10 items-center md:w-[50%] w-[100%]">
                  
      <li className="cursor-pointer hover:bg-rose-300 p-3 rounded-t-2xl rounded-b-2xl"><Link to='/'>Home </Link></li>
      <li  className="cursor-pointer  hover:bg-rose-300 p-3 rounded-t-2xl rounded-b-2xl"><Link to='/Browsebooks'>Browse Books</Link></li>
      <li className="cursor-pointer  hover:bg-rose-300 p-3 rounded-t-2xl rounded-b-2xl"><Link to='/Addbooks'>Add Book</Link></li>
      
              </ul>
          </div>
          
      </nav>
      </header>
    </div>
  )
}
