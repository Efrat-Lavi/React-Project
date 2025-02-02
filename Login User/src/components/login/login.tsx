
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import {
  Box, Button, FormControl, IconButton, InputAdornment, InputLabel,
  OutlinedInput, TextField, Typography, Modal, Card, CardContent, Stack
} from "@mui/material";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../App";
import axios from "axios";

const Login = ({ open, onClose, typeAction }: { open: boolean; onClose: () => void; typeAction: any }) => {
  const context = useContext(userContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (context.user.email !== "") onClose();
  }, [context.user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/user/${typeAction}`, {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      });
      context?.userDispatch({
        type: "CREATE_USER",
        data: {
          id: res.data.user?.id || res.data.userId,
          firstName: res.data.user?.firstName || "",
          password: passwordRef.current?.value || "",
          email: emailRef.current?.value || "",
          lastName: res.data.user?.lastName || "",
          address: res.data.user?.address || "",
          phoneNumber: res.data.user?.phone || ""
        }
      });
    } catch (e: any) {
      if (e.status === 400 && typeAction === "register") alert("User already signed up 😞");
      if (e.status === 401 && typeAction === "login") alert("User is not registered 😞");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <Card sx={{ width: 400, padding: 3 }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h4" gutterBottom>
                {typeAction === "register" ? "Sign Up" : "Sign In"}
              </Typography>
              <IconButton onClick={onClose}>
                <Close />
              </IconButton>
            </Stack>
            <form onSubmit={handleSubmit}>
              <TextField
                inputRef={emailRef}
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                type="email"
                defaultValue={context.user.email}
              />
              <FormControl margin="normal" variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputRef={passwordRef}
                  defaultValue={context.user.password}
                />
              </FormControl>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" sx={{ backgroundColor: "#388E3C", '&:hover': { backgroundColor: "#2E7D32" } }} fullWidth>
                  {typeAction === "register" ? "Sign Up" : "Sign In"}
                </Button>
                <Button onClick={onClose} variant="outlined" color="secondary"  fullWidth>
                  Cancel
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default Login;
