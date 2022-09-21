import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  var axios = require('axios');
  var data = JSON.stringify({
    "username": "dev1",
    "password": "dev1",
    "posClientID": "dev1",
    "version": "1.0.0"
  });

  var config = {
    method: 'post',
    url: 'https://tccposbackendgatewaywebapidev.azurewebsites.net/security/api/v1/Login',
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'ARRAffinity=47baf52a88e88f72ed797be2c0d776311125fc4cef74bc3d614ee8918a17df2e; ARRAffinitySameSite=47baf52a88e88f72ed797be2c0d776311125fc4cef74bc3d614ee8918a17df2e'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  return response;
}

export default function Signin() {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const posId = username;
  const version = "1.0.0";
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
      posId,
      version
    });
    if('username' == "dev1"){
      window.location.href = "/profile";
    }
    console.log(username);
    console.log(response);
    console.log('token');
    console.log('username');
  }
  
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={e => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}