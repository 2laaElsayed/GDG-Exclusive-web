
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layouts/mainLayout'
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart'
import Payment from './pages/payment/payment'

function App() {

  const router = createBrowserRouter([
{
    path:"/",
    element :<MainLayout/>,
    children :[
      {
      path:"",
      element:<Home/>
      
    },
      {
      path:"cart",
      element:<Cart/>
      
    },
     {
      path:"payment",
      element:<Payment/>
      
    }
  ]

  }
  ]) 

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
