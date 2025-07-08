import { useEffect, useState } from 'react'
import popularBooks from '../data/popularBooks'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Browsbook() {
  
const bookItems =useSelector((store)=>store.books.items)

  const{category}=useParams()

  

  const [searchText,setSearchText]=useState('')
const[filteredBooks,setFilteredBooks]=useState(popularBooks)
const allBooks =[...popularBooks,...bookItems]


useEffect(()=>{

if(category){
  const filtered = allBooks.filter((book)=>(
    book.genre.toLowerCase() === category.toLowerCase())
  )
  setFilteredBooks(filtered)
}else{
  setFilteredBooks(allBooks)
}


  },[category,bookItems])

  function handleSearch(){
    const FilteredBooks = allBooks.filter((book)=>(
      book.title.toLowerCase().includes(searchText.toLowerCase())|| 
      book.author.toLowerCase().includes(searchText.toLowerCase())||
      book.genre.toLowerCase().includes(searchText.toLowerCase())
    ))
   setFilteredBooks(FilteredBooks)
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-full bg-rose-300'>
      <div className='flex justify-center items-center'>
<div className='p-5'>
            <input type='text' className='p-5 lg:w-[50vw]  border-2 bg-rose-200 shadow-lg rounded-lg' placeholder='search books' onChange={(e)=>setSearchText(e.target.value)}></input>
            </div>
   <div className='p-2'>
<button onClick={handleSearch} className=" border-2 cursor-pointer rounded-lg shadow-lg p-2 bg-rose-500 hover:shadow-rose-300 hover:bg-rose-300" >Search</button>

   </div>

      </div>
        
   

   <div className='flex flex-wrap gap-10 p-10 justify-center items-center mt-2 shadow-lg'>
{
    filteredBooks.map((book)=>(
      <Link to={`/booksDetails/${book.id}`} key={book.id}>
<div   className='w-60  max-h-65 rounded-lg bg-rose-300 cursor-pointer shadow-lg shadow-rose-950 transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 p-4 '>
  <img src={book.image} alt={book.title} className='h-40 m-auto'></img>
  <p className='font-bold text-center text-lg mt-2'>{book.title}</p>
  <p className='text-center text-sm'>{book.author}</p>
    </div>
      </Link>

    ))
}
   </div>

   
    </div>
    
</>
    
  )
}


