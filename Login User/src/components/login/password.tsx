import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState, forwardRef, Ref } from "react";

interface PasswordInputProps {
  defaultValue?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ defaultValue }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        inputRef={ref}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
});

export default PasswordInput;
