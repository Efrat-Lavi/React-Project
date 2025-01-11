import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useEffect, useRef, useState } from "react"
import { userContext } from './appBar'
import axios from "axios"

const Update = ({ open, onClose }: { open: boolean; onClose: () => void }) => {

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
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [userID, setUserId] = useState<string>();
    const [up, setUp] = useState(false)

    useEffect(() => {
        context?.userDispatch({
            type: 'UPDATE_USER',
            data: {
                id: userID || '',
                firstName: firstNameRef.current?.value || '',
                lastName: lastNameRef.current?.value || '',
                email: emailRef.current?.value || '',
                password: passwordRef.current?.value || '',
                address: addressRef.current?.value || '',
                phoneNumber: phoneRef.current?.value || ''
            }
        })
        setUp(false)
    }, [up]);
    useEffect(() => {
        if (context.user.firstName !== '')
            onClose();
    }, [context.user]);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:3000/api/user/',
                {
                    email: firstNameRef.current?.value,
                    Phone: phoneRef.current?.value,
                    firstName: firstNameRef.current?.value,
                    lastName: lastNameRef.current?.value,
                    address: addressRef.current?.value,
                },
                { headers: { 'user-id': '' + context.user.id } }
            )
            setUserId(res.data.id);
            setUp(true);


        } catch (e) {
            console.log(e);
            if (e.status === 404)
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
                        Update
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
                        <TextField
                            inputRef={lastNameRef}
                            name="name"
                            label="Last Name"
                            fullWidth
                            margin="normal"
                            defaultValue={context.user.lastName}
                        />
                        <TextField
                            required
                            inputRef={emailRef}
                            name="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            defaultValue={context.user.email}
                        />
                        <TextField
                            inputRef={phoneRef}
                            name="phone"
                            label="Phone"
                            fullWidth
                            margin="normal"
                            defaultValue={context.user.phoneNumber}
                        />
                        <TextField
                            inputRef={addressRef}
                            name="address"
                            label="Address"
                            fullWidth
                            margin="normal"
                            defaultValue={context.user.address}
                        />
                        <FormControl sx={{/* m: 1, width: '25ch'*/ }} margin="normal" variant="outlined">
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
                            Update
                        </Button>

                    </form>

                </Typography>
            </Box>
        </Modal>

    </>)
}
export default Update