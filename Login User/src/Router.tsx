import { createBrowserRouter } from "react-router"
import About from "./components/about"
import Home from "./components/home.tsx"
import AppLayout from "./components/appLayout"
import RecipesList from "./components/recipe/recipesList"
import AddRecipe from "./components/recipe/addRecipe"
import UpdateRecipe from "./components/recipe/updateRecipe"
import { AppBar } from "@mui/material"

export const router = createBrowserRouter([
    // {
    //     path: '/n', element: <AppBar />},
    {
        path: '/', element: <AppLayout />,
       
        children: [
            { path: '/', element: <Home /> },
            { path: 'recipes', element:  <RecipesList/>,
            },
            { path: 'addRecipe', element:  <AddRecipe/>},   
            { path: 'about', element: <About /> },
            { path: 'update/:id', element: <UpdateRecipe /> }]
    }
])