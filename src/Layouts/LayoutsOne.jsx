import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import ResponsiveNav from "../Components/ResposiveNav/ResponsiveNav"


const LayoutsOne = () => {

  return (
    <div>
       <ResponsiveNav/>
       <Navbar/>
       <Outlet/>
    </div>
  )
}

export default LayoutsOne