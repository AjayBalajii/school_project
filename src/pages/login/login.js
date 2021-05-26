import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";
import AppContext from "../../context/context";
import ActionTypes from "../../context/actiontypes";
import VerifyPhone from "../../components/VerifyPhone";
import userQueries from "../../queries/user.query";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({ changeTab }) {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  const [startAuth, setStartAuth] = useState(false);
  const [phone, handlePhoneChange] = useState("");
  const [numError, setNumberError] = useState(null);
  const [disable, setDisbaled] = useState(false);

  const userVerified = () => {
    setStartAuth(false);
    dispatch({
      type: ActionTypes.Login,
      payload: {
        id: "some36bitguid",
        name: "hariprasad",
        phone: "7598187944",
        gender: "M",
        image: "someimageurl",
      },
    });
    setDisbaled(false);
  };

  const closeVerifyAuth = () => {
    setStartAuth(false);
    setDisbaled(false);
  };

  const loginUser = async () => {
    setDisbaled(true);
    if (phone.length !== 10 || phone.length === 0) {
      setNumberError("Invalid phone Number");
      setDisbaled(false);
      return;
    }
    const isExist = await userQueries.isUserExist(phone);
    console.log("isexist",isExist);
    if (isExist) {
      // setStartAuth(true);
      userVerified();
    } else {
      setNumberError(
        "Account with this phone number does not exist.Create one"
      );
      setDisbaled(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography gutterBottom component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            label="Phone Number *"
            name="phone"
            autoComplete="phone"
            value={phone}
            onChange={(e) => {
              handlePhoneChange(e.target.value);
            }}
            error={numError !== null}
            helperText={numError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91 </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginUser}
            disabled={disable}
          >
            {disable ? "Logging In" : "Login with OTP"}
          </Button>
        </form>
        <Divider
          style={{ width: "100%", backgroundColor: "grey", marginTop: "32px" }}
        />
        <p style={{ marginTop: "32px" }}>
          Create a new account if you do not have one. You will be asked to
          verify your phone number at the time of creation. By creating an
          account you agree to our{" "}
          <Button variant="text" color="secondary">
            Privacy Policy
          </Button>{" "}
          and
          <Button color="secondary">Terms and Conditions</Button>
        </p>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.submit}
          onClick={changeTab}
          disabled={disable}
        >
          Create new account
        </Button>
      </div>
      <VerifyPhone
        phoneNumber={phone}
        start={startAuth}
        onVerfied={userVerified}
        onStopped={closeVerifyAuth}
      />
    </Container>
  );
}
