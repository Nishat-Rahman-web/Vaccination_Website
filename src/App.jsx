import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutsOne from './Layouts/LayoutsOne'
import HomePage from './Pages/HomePage'

function App() {
  const myRoute = createBrowserRouter (
    createRoutesFromElements(
      <Route>
         <Route path='/' element={<LayoutsOne/>}>
           <Route index  element={<HomePage/>} />
         </Route>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={myRoute} />
    </>
  )
}

export default App
