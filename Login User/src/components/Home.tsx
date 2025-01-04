import { createContext, Dispatch, useReducer, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Login from './login';
import User, { Action, UserType } from './user';
import UserDetails from './UserDetails';

const userDefault: UserType =
{
  firstName: '', lastName: '', email: '', password: '', address: '', phoneNumber: ''
}
export const userContext = createContext<{
  user: UserType;
  userDispatch: Dispatch<Action>;
}>
  ({
    user: userDefault,
    userDispatch: () => null
  })

const Home = () => {
  
  const [user, userDispatch] = useReducer(User, userDefault);
  const [type, setType] = useState('CREATE_USER'); // סוג הפעולה
  const [isLoggedIn, setIsLoggedIn] = useState(false); // מנהל אם המשתמש מחובר או לא
  const [isLoginOpen, setIsLoginOpen] = useState(false); // ניהול מצב פתיחת המודל

  const handleOpenLogin = () =>{ 
    setIsLoginOpen(true);
    setType('CREATE_USER');
   } 

  const handleUpdate = () => {
    setType('UPDATE_USER');
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    console.log(user);
    if (user.email != '')
      setIsLoggedIn(true);
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
                  onClick={handleOpenLogin}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 2 }}
                >
                  Log In
                </Button>
              )}
              {isLoggedIn && <UserDetails />}
              {isLoggedIn && <Button
                onClick={handleUpdate}
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
      <Login open={isLoginOpen} onClose={handleCloseLogin} typeAction={type}/>
    </userContext.Provider>
  </>
  );
}

export default Home;
