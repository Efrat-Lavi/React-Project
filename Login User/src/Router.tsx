import { createBrowserRouter } from "react-router"
import About from "./components/about"
import Home from "./components/home"
import AppLayout from "./components/appLayout"
import RecipesList from "./components/recipe/recipesList"
import AddRecipe from "./components/recipe/addRecipe"
import RecipeDetails from "./components/recipe/recipe"

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