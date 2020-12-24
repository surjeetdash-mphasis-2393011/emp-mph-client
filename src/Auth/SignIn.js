import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '5px 5px 5px 5px #888888',
    padding: 10,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));


export default function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isProgressing, setIsProgressing] = useState(false);

  const submitForm = () => {

    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    } else {
      setIsProgressing(true);

      window.localStorage.setItem('token', JSON.stringify('TOKEN'));
      window.localStorage.setItem('username', JSON.stringify('surjeet'));
      props.history.push('/');
      props.setToken('TOKEN');
    }

  }


  // fetch('http://theapi/api/auth', {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     username: email,
  //     password: password,
  //   })
  // }) /*end fetch */
  //   .then(results => results.json())
  //   .then(data => this.setState({ data: data })

  //   )
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.loginButton}
            onClick={submitForm}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/ForgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <a href="/SignUp" variant="body2">
                {"Not registered?? Sign Up"}
              </a>
            </Grid>
          </Grid>
          {(props.error || error) && (
            <Alert severity="error" onClick={() => setError(null)}>
              {props.error || error}
            </Alert>
          )}
        </form>
        {isProgressing && <CircularProgress color="secondary" />}
      </div>
    </Container>
  );
}
