import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Registration from './component/Registration.jsx'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'
import ProfilePage from './component/ProfilePage.jsx'
import Recipe from './component/Recipe.jsx'
import UserReviews from './component/UserReviews.jsx'
import Saved from './component/Saved.jsx'
import RecipeDetail from './component/RecipeDetail.jsx'
import EditRecipe from './component/EditRecipe.jsx'
// import SearchRecipes from './component/SearchRecipes.jsx'

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
  {
    path: '/Profile',
    element: <ProfilePage />
  },
  {
    path: '/Recipe',
    element: <Recipe />
  },
  {
    path: '/UserReviews',
    element: <UserReviews />
  },
  {
    path: '/Saved',
    element: <Saved />
  },
  {
    path: '/RecipeDetail/:id',
    element: <RecipeDetail />
  },
  {
    path: '/EditRecipe/:id',
    element: <EditRecipe />
  },
  // {
  //   path: '/SearchRecipes/:id',
  //   element: <SearchRecipes />
  // }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
