import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Login from './login';
import UserDetails from './UserDetails';
import Update from './updateUser';
import { userContext } from '../App'

const MyAppBar = () => {

  const context = useContext(userContext);
  const [type, setType] = useState('CREATE_USER');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    if (context.user.id != '')
      setIsLoggedIn(true);
  }
  const handleCloseUpdate = () => {
    setIsUpdateOpen(false);
  }
  return (<>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {!isLoggedIn && (
                <Button
                  onClick={()=>{setIsLoginOpen(true);setType('register'); }}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 2 }}>
                  Sign Up
                </Button>
              )}
              {!isLoggedIn && (
                <Button
                  onClick={()=>{setIsLoginOpen(true);setType('login'); console.log(context.user);
                  }}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 2 }}>
                  Sign In
                </Button>
              )}
              {isLoggedIn && <UserDetails />}
              {isLoggedIn && <Button
                onClick={() => {setType('UPDATE_USER'); setIsUpdateOpen(true); console.log(context.user)}}
                variant="outlined"
                color="inherit"
                sx={{ mx: 2 }}>
                Update
              </Button>}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
        { <Login open={isLoginOpen} onClose={handleCloseLogin} typeAction={type} />}
        { <Update open={isUpdateOpen} onClose={handleCloseUpdate}></Update>}
  </>
  );
}

export default MyAppBar;
