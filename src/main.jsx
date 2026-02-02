import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import CountryDetails from './pages/CountryDetails.jsx';


// Criando rotas para o site 
const router = createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
  },
  {
    path: "/infoPage",
    element: <CountryDetails/>,
  }
] )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
