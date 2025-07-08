import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Browsbook from './Components/Browsbook.jsx'
import Addbooks from './Components/Addbooks.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './Components/Error.jsx'
import Homepage from './Components/Homepage.jsx'
import BookCard from './Components/BookCard.jsx'
import BookDetails from './Components/BookDetails.jsx'
import { Provider, useDispatch } from 'react-redux'
import bookStore from './Components/BookStore'

let routers = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
path:"",
element:<Homepage/>
    },
    {
path:"Browsebooks",
element:<Browsbook/>
    },
    {
      path:'Addbooks',
      element:<Addbooks/>
    },
    {
      path:'/books/:category',
      element:<Browsbook/>
    },
    {
      path:'/booksDetails/:id',
      element:<BookDetails/>
    },
  ]
}

])

createRoot(document.getElementById('root')).render(

 <StrictMode>
    <Provider store={bookStore}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>
)
