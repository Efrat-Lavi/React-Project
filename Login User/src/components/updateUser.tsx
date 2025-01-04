// import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, TextField, Typography } from "@mui/material"
// import { FormEvent, useContext, useRef, useState } from "react"
// import { userContext } from "./Home"
// import { Visibility, VisibilityOff } from "@mui/icons-material";


// const UpdateUser = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
//   const context = useContext(userContext);
//   const user = context.user;
//   const firstNameRef = useRef<HTMLInputElement>(null);
//   const lastNameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const addressRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const phoneRef = useRef<HTMLInputElement>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//       event.preventDefault();
//   };
//   const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//       event.preventDefault();
//   };
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     context.userDispatch({
//       type:'UPDATE_USER',
//       data: {firstName:firstNameRef.current?.value||'',
//       lastName:lastNameRef.current?.value||'',
//       email:emailRef.current?.value||'',
//       password: passwordRef.current?.value||'',
//       address:addressRef.current?.value||'',
//       phoneNumber: phoneRef.current?.value||''}
//     })
//   }
//   <Modal
//     open={open}
//     onClose={onClose}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
//   >
//     <Box sx={style}>
//       <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
//         <Typography variant="h4" gutterBottom >
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             inputRef={firstNameRef}
//             name="name"
//             label="First Name"
//             fullWidth
//             margin="normal"
//             value={user.firstName}
//           />
//           <TextField
//             inputRef={lastNameRef}
//             name="name"
//             label="Last Name"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             required
//             inputRef={emailRef}
//             name="email"
//             label="Email"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             inputRef={phoneRef}
//             name="phone"
//             label="Phone"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             inputRef={addressRef}
//             name="address"
//             label="Address"
//             fullWidth
//             margin="normal"
//           />
//           <FormControl sx={{/* m: 1, width: '25ch'*/ }} margin="normal" variant="outlined">
//             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//             <OutlinedInput
//               id="outlined-adornment-password"
//               type={showPassword ? 'text' : 'password'}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label={
//                       showPassword ? 'hide the password' : 'display the password'
//                     }
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     onMouseUp={handleMouseUpPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//               inputRef={passwordRef}
//             />

//           </FormControl>
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Login
//           </Button>
//         </form>

//       </Typography>
//     </Box>
//   </Modal>
// }