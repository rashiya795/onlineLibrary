import booksImg from "../assests/books.jpg";
import fictionImg from '../assests/fictionCover.jpg'
import nonFictionImg from '../assests/nonfictionalcover.jpeg'
import comicCover from '../assests/comicCover.jpg'
import ScifieCover from '../assests/scifiecover.jpg'
import popularBooks from '../data/popularBooks'
import Browsbook from "./Browsbook";
import { Link } from "react-router-dom";


export default function Homepage() {
   

  return (
    <>



<main className=" flex flex-col lg:flex-row py-5  bg-rose-300">

<div className="  flex flex-col lg:ml-5 min-h-[85vh] lg:w-[55vw] shadow-lg shadow-rose-900/40 mt-6 bg-rose-200 justfu-center items-center rounded-lg ">
  <div className=" flex justify-center p-5">
    
    <img src={booksImg} className="h-[60vh] shadow-lg shadow-black-900/40 md:w-[57vw] rounded-lg"></img>

    </div>
    <div className=" lg:text-2xl font-bold text-rose-800 flex p-2  md:w-[50vw]  flex-col justify-center items-center  ">
<h1 className="text-shadow text-shadow-md text-rose-900 ">You never know what one book can do.</h1>
 
<p className="text-center text-shadow text-shadow-md md:text-2xl text-rose-900"><span className="text-rose-950 text-center">Step into Read — </span>where the next chapter might just change your story.</p>
  </div>
  
</div>

<div className="flex flex-col  md:ml-5 min-h-[85vh] lg:w-[55vw] shadow-lg shadow-rose-900/40 mt-6 justfy-center items-center rounded-lg ">

<div className=" m-auto flex gap-5 justify-center items-center lg:flex-row flex-col md:max-h-50vh w-full">
  <div className="flex gap-4">

    
    <Link to="/books/Fiction">
    <div  className="bg-rose-300 cursor-pointer shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 shadow-rose-800  h-60 w-40  p-3 rounded-lg m ">
<img className="lg:h-40 h-45  rounded-lg m-auto" src={fictionImg} ></img>
<p className="font-bold font-mono p-2 text-center text-rose-950">Fiction</p>
</div>
    </Link>
            


 <Link to="/books/SciFi">
 <div  className="bg-rose-300 cursor-pointer shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 shadow-rose-800  h-60 w-40 p-3 rounded-lg m">
<img className="lg:h-40 h-45 rounded-lg m-auto" src={ScifieCover} ></img>
<p className="font-bold font-mono p-2 text-center text-rose-950">SciFie</p>
</div>
 </Link>


  </div>



<div className=" flex gap-5">
  
<Link to="/books/NonFiction">
<div   className="bg-rose-300 h-60 w-40 shadow-lg cursor-pointer shadow-rose-800 transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 p-3 rounded-lg m">
<img className="lg:h-40 rounded-lg m-auto" src={nonFictionImg} ></img>
<p className=" font-mono mt-2 text-rose-950 font-extrabold text-center">Non Fiction</p>
</div>
</Link>

<Link to="/books/Comics">
<div   className="bg-rose-300 shadow-lg cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-110 shadow-rose-800  h-60 w-40 p-3 rounded-lg m">
<img className="lg:h-40 h-45 rounded-lg m-auto" src={comicCover} ></img>
<p className="font-bold font-mono p-2 text-center text-rose-950">Comics</p>
</div>
</Link>




</div>

</div>



<div className="m-auto p-5 flex gap-5  justify-center items-center  flex-col md:max-h-50vh w-full">

<div className="m-auto font-bold font-mono lg:text-2xl md:text-3xl">
  <h1>Books Everyone's Talking About</h1>
</div>

<div className=" flex md:flex-row flex-col gap-6">

<div className="flex flex-row gap-6">
{
  popularBooks.slice(21,23).map((book)=>
  (
<div key={book.id} className="bg-rose-400 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-120 shadow-rose-800 lg:h-55 w-35 p-2 rounded-lg m">
<img className="lg:h-40 h-45 rounded-lg m-auto" src={book.image} ></img>
<p className="font-bold font-mono p-2 ">{book.title.slice(0,5)}..<Link to={`/booksDetails/${book.id}`}className="  cursor-pointer text-blue-950 underline ">Know More</Link>
</p>

</div> 
  ))
}
</div>




<div className="flex flex-row gap-5">
{
  popularBooks.slice(12,14).map((book)=>
  (
<div key={book.id} className="bg-rose-400 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-120 shadow-rose-800 lg:h-55 w-35 p-2 rounded-lg m">
<img className="lg:h-40 h-45  rounded-lg m-auto" src={book.image} ></img>
<p className="font-bold font-mono p-2 ">{book.title.slice(0,5)}..<a href={`/booksDetails/${book.id}`}className="cursor-pointer  text-blue-950 underline ">Know More</a>
</p>

</div> 
  ))
}
</div>

</div>


</div>

</div>
</main>
     



 
    </>
  
  )
}