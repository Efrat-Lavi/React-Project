import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, CardContent, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useEffect, useRef, useState } from "react"
import { userContext } from '../start'
import axios from "axios"
import { style } from "../style/style";
import PasswordInput from "./password";
const Update = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const context = useContext(userContext);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (context.user.firstName !== '')
            onClose();
    }, [context.user]);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:3000/api/user/',
                {
                    email: emailRef.current?.value,
                    phone: phoneRef.current?.value,
                    firstName: firstNameRef.current?.value,
                    lastName: lastNameRef.current?.value,
                    address: addressRef.current?.value
                },
                { headers: { 'user-id': '' + context.user.id } }
            )
            context?.userDispatch({
                type: 'UPDATE_USER',
                data: {
                    id: res.data.id,
                    firstName: firstNameRef.current?.value || '',
                    lastName: lastNameRef.current?.value || '',
                    email: emailRef.current?.value || '',
                    password: passwordRef.current?.value || '',
                    address: addressRef.current?.value || '',
                    phoneNumber: phoneRef.current?.value || ''
                }
            })
        } catch (e: any) {
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
        <Modal open={open} onClose={onClose}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                <Card sx={{ width: 400, padding: 3 }}>
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h4" gutterBottom>
                                Edit
                            </Typography>
                            <IconButton onClick={onClose}>
                                <Close />
                            </IconButton>
                        </Stack>
                        <form onSubmit={handleSubmit}>
                            <TextField inputRef={firstNameRef} name="name" label="First Name" fullWidth margin="normal" defaultValue={context.user.firstName} />
                            <TextField inputRef={lastNameRef} name="name" label="Last Name" fullWidth margin="normal" defaultValue={context.user.lastName} />
                            <TextField required inputRef={emailRef} name="email" label="Email" fullWidth defaultValue={context.user.email} />
                            <TextField inputRef={phoneRef} name="phone" label="Phone" fullWidth margin="normal" defaultValue={context.user.phoneNumber} />
                            <TextField inputRef={addressRef} name="address" label="Address" fullWidth margin="normal" defaultValue={context.user.address} />
                            <PasswordInput ref={passwordRef} defaultValue={context.user.password} />
                          
                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" sx={{ backgroundColor: "#388E3C", '&:hover': { backgroundColor: "#2E7D32" } }} fullWidth>
                Update
                </Button>
                <Button onClick={onClose} variant="outlined" color="secondary" fullWidth>
                  Cancel
                </Button>
              </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Modal>
    </>)
}
export default Update