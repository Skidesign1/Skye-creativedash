import React, { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'src/routes/hooks';
import { Iconify } from 'src/components/iconify';
import { useNavigate } from 'react-router-dom';

interface SignInViewProps {
  onSignInSuccess: () => void;
}
export function SignInView({ onSignInSuccess }: SignInViewProps) {
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Sign-in button clicked!");

   // const token ='user_authenticated_token';
   // localStorage.setItem('authToken', token);

    onSignInSuccess();

  navigate('/dashboard');
}, [onSignInSuccess, navigate]);
    
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-center">
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{mb:5}}>
        <Typography variant="h5">Sign in</Typography>
        <Typography variant="body2" color="text.secondary">
          Don&apos;t have an account?
          <Link variant="subtitle2" sx={{ ml:0.5}}>
          Get started
          </Link>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField
        fullWidth
        name="email"
        label="Email address"
        defaultValue="hello@gmail.com"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
        defaultValue="@demo1234"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
      >
        Sign in
      </LoadingButton>

      <Link
      href="/forgot-password"
      variant="body2" 
      color="inherit" 
      sx={{ mb: 1.5 }}
      >
        Forgot password?
      </Link>
    </Box>
  

 <Box sx={{ mt:3 }}>
  <Divider sx={{ my:3, '&:before, &:after': {borderTopStyle: 'dashed'} }}>
    <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}>
      OR
    </Typography>
  </Divider>
 </Box>
 </Box>
  );
}