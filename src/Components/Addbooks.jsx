import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addItems } from './bookSlice'
import { useDispatch } from 'react-redux'



export default function Addbooks() {

const dispatch =useDispatch()
const navigate =useNavigate()


const[formData,setFormData]=useState({


  title:'',
  author:'',
  genre:'',
  image:'',
  description:'',

})


function handleChange(e){
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })

}

function handleSubmit(e){

e.preventDefault()

 if (formData.title && formData.author && formData.genre && formData.description) {
    
  const bookWithId ={...formData,id:Date.now()}
  dispatch(addItems(bookWithId));
    navigate('/Browsebooks');


setFormData({
    title:'',
  author:'',
  genre:'',
  image:'',
  description:'',
  })
}
}






  return (
    <div className='min-h-screen m-auto flex justify-center items-center bg-rose-200'>
   
        <form  onSubmit ={handleSubmit} className=" p-5 min-w-[30vw] mx-auto bg-rose-100 shadow-rose-900  shadow-lg rounded-lg ">
      <h2 className="text-xl font-bold mb-4 text-center">Add New Book</h2>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Author:
        <input
          type="text"
          name="author"
           value={formData.author}
            onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Genre:
        <input
          type="text"
          name="genre"
          value={formData.genre}
           onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
          required
        />
      </label>

     <label className="block mb-2">
  Rating
  <select
    name="rating"
    value={formData.rating}
    onChange={handleChange}
    className="w-full p-2 mt-1 border rounded"
    required
  >
    <option value="">Select rating</option>
    <option value="⭐">⭐</option>
    <option value="⭐⭐">⭐⭐</option>
    <option value="⭐⭐⭐">⭐⭐⭐</option>
    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
  </select>
</label>


      <label className="block mb-4">
        Image URL:
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
            pattern="https?://.+"
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

<label className="block mb-4">
        Description:
        <textarea
          name="description"
          value={formData.description}
                    onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
          rows="4"
          required
        ></textarea>
      </label>

      <button
        type="submit"
        className="w-full bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"
      >
        Add Book
      </button>
    </form>
    </div>
  )
}
