
import { RouterProvider } from 'react-router-dom'
import MyAppBar from './components/appBar'
import { router } from './Router'
function App() {

  return (
    <>
    <MyAppBar/>
    <RouterProvider router={router}/>

    
    </>
  )
}

export default App
