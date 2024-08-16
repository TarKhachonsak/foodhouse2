import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Registration from './component/Registration.jsx'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Registration />
  },
  {
    path: '/Home',
    element: <Home />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
