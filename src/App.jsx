import { useState } from 'react'
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Layout from './Layouts/Layout'
import AddOns from './Pages/AddOns'
import Info from './Pages/Info'
import Plans from './Pages/Plans'
import Summary from './Pages/Summary'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Info/> } />
            <Route path='Plans' element={ <Plans />
             } />
            <Route path='Add-ons' element={ <AddOns />} />
            <Route path='Summary' element={ <Summary /> } />
          </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
