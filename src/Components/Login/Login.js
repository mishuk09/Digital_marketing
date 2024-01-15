import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/Firebase.init';
import useFirebase from '../Hooks/useFirebase';
import { Google } from '@mui/icons-material';
const auth = getAuth(app)


export default function Signin() {

    const { signInWithGoogle } = useFirebase();



    const [islogin, setIslogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getEmail = (event) => {
        setEmail(event.target.value);
    }
    const getPassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = event => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user;
                setEmail('');
                setPassword('');
                setIslogin(true)
            })
            .catch(error => {
                console.error('Error creating user:', error.message);
            });

        event.preventDefault();
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Email send");
            })
    }
    if (islogin) {
        return <Navigate to="/admin" />;
    }
    return (

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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 4 }}>
                    <TextField
                        margin="normal"
                        onBlur={getEmail}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        onBlur={getPassword}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        // onClick={handleFormSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" onClick={handlePasswordReset} variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            Don't have an account?
                            <Link to='/signup' variant="body2">
                                Sign Up
                            </Link>
                        </Grid>
                        <Grid item>
                            Or Sign With

                        </Grid>
                        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                            <Button
                                variant="contained"
                                onClick={signInWithGoogle}
                                startIcon={<Google />}
                                fullWidth
                                sx={{ width: '100%', marginBottom: '7px' }}
                            >
                                Google
                            </Button>


                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    );
}