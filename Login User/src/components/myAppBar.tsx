
import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Login from './login/login';
import UserDetails from './login/UserDetails';
import Update from './login/updateUser';
import { UserContext } from './start'
import { PersonAdd, Login as LoginIcon } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

const MyAppBar = () => {
  const context = useContext(UserContext);
  const [type, setType] = useState('CREATE_USER');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    if (context.user.id !== '')
      setIsLoggedIn(true);
  };
  const handleCloseUpdate = () => {
    setIsUpdateOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {!isLoggedIn && (
                <Button
                  onClick={() => { setIsLoginOpen(true); setType('register'); }}
                  variant="contained"
                  sx={{ mx: 2, backgroundColor: "#FFB74D", '&:hover': { backgroundColor: "#FFA726" } }}
                  startIcon={<PersonAdd />}
                >
                  Sign Up
                </Button>
              )}
              {!isLoggedIn && (
                <Button
                  onClick={() => { setIsLoginOpen(true); setType('login'); }}
                  variant="contained"
                  sx={{ mx: 2, backgroundColor: "#FFB74D", '&:hover': { backgroundColor: "#FFA726" } }}
                  startIcon={<LoginIcon />}
                >
                  Sign In
                </Button>
              )}
              {isLoggedIn && <UserDetails />}
              {isLoggedIn && (<>

                <Button
                  onClick={() => { setType('UPDATE_USER'); setIsUpdateOpen(true); }}
                  variant="outlined"
                >
                  <Avatar sx={{ mx: 1, bgcolor: "#FFB74D" }} onClick={() => { setType('UPDATE_USER'); setIsUpdateOpen(true); }}>
                    <BorderColorRoundedIcon />
                  </Avatar>
                </Button>
              </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {<Login open={isLoginOpen} onClose={handleCloseLogin} typeAction={type} />}
      {<Update open={isUpdateOpen} onClose={handleCloseUpdate}></Update>}
    </>
  );
};

export default MyAppBar;
