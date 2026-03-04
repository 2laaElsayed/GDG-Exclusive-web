
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layouts/mainLayout'
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart'
import Payment from './pages/payment/payment'
import Account from './pages/Account/Account'
import ProfilePart from './components/account/profilePart'

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
    ,
     {
      path:"account",
      element:<Account/>,
      children:[
        {
          path:"",
          element:<ProfilePart/>
        }
      ]
    }
  ]

  }
  ]) 

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
