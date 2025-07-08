import React from 'react'


export default function BookCard({book}) {

   

 

  return (
    <div>
  <div className='flex flex-wrap gap-10 p-10 justify-center items-center mt-2 shadow-lg'>

 <div  key={book.id} className='w-60  max-h-65 rounded-lg bg-rose-300 cursor-pointer shadow-lg shadow-rose-950 transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 p-4 '>
   <img src={book.image} alt={book.title} className='h-40 m-auto'></img>
   <p className='font-bold text-center text-lg mt-2'>{book.title}</p>
   <p className='text-center text-sm'>{book.author}</p>
     </div>
    
    </div>

    </div>
  )
}
