import { Close } from "@mui/icons-material";
import {
  Box, Button, Card, CardContent, IconButton, Modal, Stack, TextField, Typography
} from "@mui/material";
import { FormEvent, useContext, useEffect, useRef } from "react";
import { userContext } from '../start'
import axios from "axios";
import Swal from "sweetalert2";
import PasswordInput from "./password";

const Login = ({ open, onClose, typeAction }: { open: boolean; onClose: () => void; typeAction: any }) => {
  const context = useContext(userContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (context.user.email !== "") onClose();
  }, [context.user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/user/${typeAction}`, {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
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
          phoneNumber: res.data.user?.phone || "",
        },
      });

      Swal.fire({
        title: "Successfully logged in!",
        icon: "success",
        draggable: true,
      });
    } catch (e: any) {
      if (e.status === 400 && typeAction === "register")
        Swal.fire({
          title: "User already signed up",
          icon: "error",
          draggable: true,
        });

      if (e.status === 401 && typeAction === "login")
        Swal.fire({
          title: "User is not registered",
          icon: "error",
          draggable: true,
        });
    }
    onClose();
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
              <PasswordInput ref={passwordRef} defaultValue={context.user.password} />
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" sx={{ backgroundColor: "#388E3C", '&:hover': { backgroundColor: "#2E7D32" } }} fullWidth>
                  {typeAction === "register" ? "Sign Up" : "Sign In"}
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
  );
};

export default Login;
