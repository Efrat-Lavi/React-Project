import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useEffect, useRef, useState } from "react"
import { userContext } from './appBar'
import axios from "axios"
const Login = ({ open, onClose, typeAction }: { open: boolean; onClose: () => void, typeAction: any }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const context = useContext(userContext);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [userID, setUserId] = useState<string>()

    useEffect(() => {
        context?.userDispatch({
            type: 'CREATE_USER',
            data: {
                id: userID + '' || '',
                firstName: firstNameRef.current?.value || '',
                password: passwordRef.current?.value || ''
            }
        })
    }, [userID]);
    useEffect(() => {
        if (context.user.firstName !== '') {
            onClose();
        }
    }, [context.user]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (typeAction == 'Sign Up')
            try {
                const res = await axios.post('http://localhost:3000/api/user/register',
                    {
                        email: firstNameRef.current?.value,
                        password: passwordRef.current?.value
                    }
                )

                setUserId(res.data.userId);

            } catch (e) {
                console.log(e);
                if (e.status === 422)
                    alert('user already sign up')
            }
        else
            try {
                const res = await axios.post('http://localhost:3000/api/user/login',
                    {
                        email: firstNameRef.current?.value,
                        password: passwordRef.current?.value
                    },
                    { headers: { 'user-id': '' + userID } }
                )
                setUserId(res.data.user.id);

            } catch (e) {
                console.log(e);
                if (e.status === 422)
                    alert('user not found')
            }

    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (<>
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
                    <Typography variant="h4" gutterBottom >
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            inputRef={firstNameRef}
                            name="name"
                            label="First Name"
                            fullWidth
                            margin="normal"
                            defaultValue={context.user.firstName}

                        />


                        <FormControl margin="normal" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputRef={passwordRef}
                                defaultValue={context.user.password}
                            />

                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>

                    </form>

                </Typography>
            </Box>
        </Modal>

    </>)
}
export default Login