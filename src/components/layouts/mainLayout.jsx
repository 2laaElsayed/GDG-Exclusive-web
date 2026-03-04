import Nav from "../nav/Nav.jsx"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import AddToTop from "../AddToTop.jsx"


export default function MainLayout()
{


    return <>
    <Nav/>
   <Outlet/>
    <Footer/>
      <AddToTop/>
    </>

}