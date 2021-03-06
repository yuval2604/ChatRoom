import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios"
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export const LoginPage = ({ title, register }) => {
  let history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var postData = {
      name: name,
      password: password
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    };
    // register / login
    console.log("handle submit request name and password are :", name, password)
    axios.post("http://localhost:4001/users/register", postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data.name);
        history.push(`/chat?name=${name}&room=${room}`)
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.icons}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Avatar className={classes.avatar}>
            <FacebookIcon />
          </Avatar>

          <Avatar className={classes.avatar}>
            <LinkedInIcon />
          </Avatar>
        </div>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name Address"
            value={name}
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="room"
            value={room}
            label="room"
            type="name"
            id="roomroom"
            autoComplete="current-password"
            onChange={(event) => setRoom(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {register ? "Sign In" : "Login"}
          </Button>

          <Grid container>
            <Grid item>
              <Link href="./login" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};
