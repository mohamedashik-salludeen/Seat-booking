import React, {useState } from 'react';
import { Box, Container, TextField, Button, Grid, Typography } from '@mui/material';
import {RegisterInputs} from './LoginComponents/loginInput';


const RegistrationForm = () => {
    const INIT_STATE_REG = {
        username:"",
        password:"",
        confirmPassword:"",
        address:"",
        phoneNumber:""
    }
    const[userRegister,setUserRegister]=useState(INIT_STATE_REG)

    const RegisterChange =(e)=>{
        setUserRegister({...userRegister,[e.target.name]:e.target.value})
    }

console.log(userRegister);
    return (
        <Container maxWidth="sm">
            <Box sx={{ width: "550px", padding: "25px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2"> Registration Form</Typography>
                    </Grid>

                </Grid>
                <form autoComplete='off'>
                    <Grid container spacing={2}>
                        {
                            RegisterInputs.map((input,id) => {
                                return (
                                    <Grid item xs={12} key={id}>
                                        <TextField {...input} onChange={(e)=>RegisterChange(e)}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                  
                    < Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="contained" color="success" type="submit" fullWidth style={{ marginTop: "10px" }}>Save</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: "10px" }}> Reset</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default RegistrationForm;
