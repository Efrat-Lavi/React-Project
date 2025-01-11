import { createBrowserRouter } from "react-router"
import About from "./components/about"
import Home from "./components/home"
import AppLayout from "./components/appLayout"

export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
       
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> }]
    }
])