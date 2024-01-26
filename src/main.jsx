import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Product from './Component/Product.jsx'
import Detail from './Component/Detail.jsx'
import Bag from './Component/Bag.jsx'
import SignUp from './Component/SignUp.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    element:  <App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },

      {
        path:"/product",
        element:<Product/>
      },
      {
        path:"/detail",
        element:<Detail />
      },
      {
        path:"/bag",
        element:<Bag />
      },
      {
        path:"/signup",
        element:<SignUp />
      },
     
      
    ]
    }
     
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
