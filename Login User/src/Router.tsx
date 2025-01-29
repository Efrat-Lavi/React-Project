import { createBrowserRouter } from "react-router"
import About from "./components/about"
import Home from "./components/home"
import AppLayout from "./components/appLayout"
import RecipesList from "./components/recipesList"
import AddRecipe from "./components/addRecipe"
import RecipeDetails from "./components/recipe"

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
       
        children: [
            { path: '/', element: <Home /> },
            { path: 'recipes', element:  <RecipesList/>,
                // children:[{path:"/recipe/:id",element:<RecipeDetails />}]
            },
            { path: 'addRecipe', element:  <AddRecipe/>},   
            { path: 'about', element: <About /> }]
    }
])