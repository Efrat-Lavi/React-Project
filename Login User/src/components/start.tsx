
import { RouterProvider } from 'react-router-dom'
import MyAppBar from '../components/myAppBar'
import { router } from '../Router'
import { Provider } from 'react-redux'
import store from '../store/store'
import { createContext, Dispatch, useReducer } from 'react'
import User, { Action, UserType } from '../components/User'

const userDefault: UserType ={
  id:'',firstName: '', lastName: '', email: '', password: '', address: '', phoneNumber: ''}

 export const userContext = createContext<{
  user: UserType;
  userDispatch: Dispatch<Action>;
}>
  ({
    user: userDefault,
    userDispatch: () => null
  })
function Start() {
  const [user, userDispatch] = useReducer(User, userDefault);
 
  return (
    <>
    <userContext.Provider value={{ user, userDispatch }}>
    <Provider store={store}>
    <MyAppBar/>
    <RouterProvider router={router}/>
    </Provider>
    </userContext.Provider>

    </>
  )
}

export default Start
