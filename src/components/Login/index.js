import React, { } from 'react';
import { Box, Container, TextField, Button, Grid, Typography, Link } from '@mui/material';
import { LoginInputs } from './LoginComponents/loginInput';


const LoginForm = () => {




    return (
        <Container maxWidth="sm">
            <Box sx={{ width: "550px", padding: "25px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2">
                            Login Form
                        </Typography>
                    </Grid>

                </Grid>
                <form autoComplete='off'>
                    <Grid container spacing={2}>
                        {
                            LoginInputs.map((input)=>{
                                return(
                                    <Grid item xs={12}>
                                         <TextField {...input} />
                                    </Grid>
                                )
                            })   
                        }

                    </Grid>
                    <Grid container spacing={2}>

                        <Grid item xs={8}>
                            <Button variant="contained" color="success" type="submit" fullWidth style={{ marginTop: "10px" }}>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" type="submit" fullWidth style={{ marginTop: "10px", color: "#fff" }}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item xs={8} style={{ textAlign: "left" }}>
                            <Link href="#">Forgot Password</Link>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left" }}>
                            <Link href="#">New Registration</Link>
                        </Grid>
                    </Grid>

                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;
