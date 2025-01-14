import { createContext, Dispatch, useReducer, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Login from './login';
import User, { Action, UserType } from './User';
import UserDetails from './UserDetails';
import Update from './updateUser';

const userDefault: UserType =
{
  id:'',firstName: '', lastName: '', email: '', password: '', address: '', phoneNumber: ''
}
export const userContext = createContext<{
  user: UserType;
  userDispatch: Dispatch<Action>;
}>
  ({
    user: userDefault,
    userDispatch: () => null
  })

const MyAppBar = () => {

  const [user, userDispatch] = useReducer(User, userDefault);
  const [type, setType] = useState('CREATE_USER'); // סוג הפעולה
  const [isLoggedIn, setIsLoggedIn] = useState(false); // מנהל אם המשתמש מחובר או לא
  const [isLoginOpen, setIsLoginOpen] = useState(false); // ניהול מצב פתיחת המודל
  const [isUpdateOpen, setIsUpdateOpen] = useState(false); // ניהול מצב פתיחת המודל
 


  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    if (user.id != '')
      setIsLoggedIn(true);
  }
  const handleCloseUpdate = () => {
    setIsUpdateOpen(false);
    console.log(user);
  }

  return (<>
    <userContext.Provider value={{ user, userDispatch }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* תפריט ראשי */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {!isLoggedIn && (

                <Button
                  onClick={()=>{setIsLoginOpen(true);setType('register'); }}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 2 }}
                >
                  Sign Up
                </Button>

              )}
              {!isLoggedIn && (

                <Button
                  onClick={()=>{setIsLoginOpen(true);setType('login'); }}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 2 }}
                >
                  Sign In
                </Button>

              )}
              {isLoggedIn && <UserDetails />}
              {isLoggedIn && <Button
                onClick={() => {setType('UPDATE_USER'); setIsUpdateOpen(true);}}
                variant="outlined"
                color="inherit"
                sx={{ mx: 2 }}
              >
                Update
              </Button>}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    
        { <Login open={isLoginOpen} onClose={handleCloseLogin} typeAction={type} />}
        { <Update open={isUpdateOpen} onClose={handleCloseUpdate}></Update>}
    </userContext.Provider>

    <div></div>
  </>
  );
}

export default MyAppBar;
