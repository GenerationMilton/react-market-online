
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { NotFound } from '../NotFound'
import { Signin } from '../Signin'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {
      path: '/',
      element:<Home/>
    },
    {
      path: '/my-account',
      element:<MyAccount/>
    },
    {
      path: '/my-order',
      element:<MyOrder/>
    },
    {
      path: '/my-orders',
      element:<MyOrders/>
    },
    {
      path: '/*',
      element:<NotFound/>
    },
    {
      path: '/sign-in',
      element:<Signin/>
    }
  ])
   
    return routes

}

const App =()=> {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
       
    
  )
}

export default App
