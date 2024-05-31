/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componets/Home/Home.jsx';
import Countries from './componets/Countries/Countries.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'country/:countryId',
        element: <div></div>,
        loader: ({params}) => fetch(`/${params.countryId}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
