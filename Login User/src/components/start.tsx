

import { RouterProvider } from 'react-router-dom'
import MyAppBar from '../components/myAppBar'
import { router } from '../Router'
import { Provider } from 'react-redux'
import store from '../store/store'
import { createContext, Dispatch, useReducer } from 'react'
import User, { Action, UserType } from '../components/User'
import Footer from './footer'

const userDefault: UserType = {
  id: '', firstName: '', lastName: '', email: '', password: '', address: '', phoneNumber: ''
}

export const UserContext = createContext<{
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

      <UserContext value={{ user, userDispatch }}>
        <Provider store={store}>
          <MyAppBar />
          <RouterProvider router={router} />
        </Provider>
      </UserContext>
<Footer/>
    </>
  )
}

export default Start
