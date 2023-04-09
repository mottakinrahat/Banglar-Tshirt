import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Main from './Component/Layout/Main';
import OrderRivew from './Component/OrderRivew/OrderRivew';
import Grandpa from './Component/Grandpa/Grandpa';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path:'review',
        element:<OrderRivew/>
      },
      {
        path:'grandpa',
        element:<Grandpa/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
