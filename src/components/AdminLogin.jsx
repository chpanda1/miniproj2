import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AdminLogin({setShow}) {

  const navigate = useNavigate();
  setShow = false;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get("username") === 'admin' && data.get("password") === 'admin123'){
      Cookies.set('admin', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", { expires: 7 });
      if(Cookies.get("admin") === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"){
        setShow = true;
      }
      navigate("/");
    }else if(data.get("username") !== 'admin' || data.get("password") !== 'admin123'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorect Admin Login'
      })
    }
    console.log({
      adminuser: data.get("username"),
      password: data.get("password"),
    });
  }
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Admin Login"
            name="username"
            autoComplete="current-username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Admin Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AdminLogin


