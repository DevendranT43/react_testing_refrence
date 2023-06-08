import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function DownloadRefrence(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" href="/React Testing refrence.docx">
        React Testing refrence Document
      </Link>{' '}
      {new Date().getFullYear()} 
      {/*// todo add cobalt document id */}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate()

  //? Declare states for i/p
  const [loginid,setloginid] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();  
    navigate("/blogs")
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="loginid"
              label="loginid"
              name="loginid"
              placeholder='loginid'
              value={loginid}
              onChange={(e)=>setloginid(e.target.value)}

              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='password'
              autoComplete="current-password"
            /> 
            <Button
              type="submit"
              disabled={!loginid}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Login
            </Button>
          </Box>
        </Box>
        <DownloadRefrence sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}







