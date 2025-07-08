import { Link, useParams } from "react-router-dom";
import popularBooks from "../data/popularBooks";
import { useSelector } from "react-redux";



function BookDetails() {
  const params = useParams();
  const reduxBooks = useSelector((store)=>store.books.items)
  const allBooks = [...popularBooks,...reduxBooks]
  const book = allBooks.filter((book) => book.id == params.id);

  return (
    <div className="min-h-screen p-10 bg-rose-50 flex flex-col">
      <h1 className="text-center  font-bold text-3xl mt-6">About Book</h1>

      {book.map((book) => (
        <div
          key={book.id}
          className="max-w-4xl mx-auto mt-6 bg-rose-200 shadow-lg shadow-rose-900 rounded-xl p-5 flex flex-col md:flex-row items-center gap-6"
        >
         
          <img
            src={book.image}
            alt={book.title}
            className="w-56 h-80 object-cover rounded-lg shadow-md"
          />

     
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold text-rose-900">{book.title}</h2>
            <p className="text-base text-gray-700">Genre: {book.genre}</p>
            <p className="text-base text-gray-700">Author: {book.author}</p>
            <p className="text-base text-gray-700">Rating: {book.rating}</p>
            <p className="text-sm text-gray-800 mt-2">{book.description}</p>
          </div>
        </div>
      ))}

      <div>
    <Link to='/Browsebooks'  className='text-center font-bold underline cursor-pointer text-blue-900' >Back to Browse Books</Link>
   </div>
    </div>
  );
}

export default BookDetails;
