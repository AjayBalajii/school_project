import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppContext from "../../context/context";
import ActionTypes from "../../context/actiontypes";
import VerifyPhone from "../../components/VerifyPhone";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress";

const betweenSpacing = "10px";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ changeTab }) {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  const [startAuth, setStartAuth] = useState(false);
  const [status, setStatus] = useState("pending");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "Not Disclosed",
    dob: "",
    experience: "",
    phone: "",
  });
  const [error, setError] = useState({
    name: null,
    email: null,
    gender: null,
    dob: null,
    experience: null,
    phone: null,
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const userVerified = () => {
    setStartAuth(false);
    setStatus("creating");
    setTimeout(() => {
      dispatch({
        type: ActionTypes.Login,
        payload: formData,
      });
    },5000);
  };

  const closeVerifyAuth = () => {
    setStartAuth(false);
  };

  const validateform = () => {
    const { phone, name, dob, experience } = formData;
    if (name.length < 3) {
      setError({
        ...error,
        name: "Name should minimum of 3 letters",
      });
      return false;
    }
    if (dob.length === 0) {
      setError({
        ...error,
        dob: "Please select date of birth",
      });
      return false;
    }
    if (experience.length === 0) {
      setError({
        ...error,
        experience: "Please select years of preparation",
      });
      return false;
    }
    if (phone.length !== 10 || phone.length === 0) {
      setError({
        ...error,
        phone: "Invalid phone number",
      });
      return false;
    }
    return true;
  };

  const loginUser = () => {
    if (validateform()) {
      setStatus("verifying");
      setStartAuth(true);
    }
  };


  const renderActionButton = (stats) => {
    console.log("current status", stats);
    switch (stats) {
      case "pending":
        return (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginUser}
          >
            Verify phone number
          </Button>
        );
      case "creating":
        return <CircularProgress />;
      default:
        return (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginUser}
          >
            Verify phone number
          </Button>
        );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          style={{ textTransform: "capitalize" }}
          component="h1"
          variant="h5"
        >
          {`welcome ${formData.name}`}
        </Typography>
        <p
          style={{
            marginTop: "4px",
            marginBottom: "8px",
            fontSize: "12px",
            opacity: "0.7",
            textDecoration: "underline",
            cursor:"pointer"
          }}
          onClick={changeTab}
        >
          Back to login
        </p>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name *"
            name="name"
            error={error.name !== null}
            helperText={error.name}
            onChange={handleFormChange}
          />
          {/* <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            id="email"
            label="Email *"
            name="email"
            error={error.name !== null}
            helperText={error.name}
            onChange={handleFormChange}
          /> */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="dob"
            label="Date of Birth *(dd-mm-yyyy/31-01-1996)"
            name="dob"
            error={error.dob !== null}
            helperText={error.dob}
            onChange={handleFormChange}
          />
          <FormControl
            variant="outlined"
            fullWidth
            style={{
              marginTop: betweenSpacing,
            }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              How long you have been preparing for?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="experience"
              onChange={handleFormChange}
              label="How long you have been preparing for? *"
              error={error.experience !== null}
            >
              <MenuItem value={"Less than 1 year"}>Less than 1 year</MenuItem>
              <MenuItem value={"1-3 years"}>1-3 years</MenuItem>
              <MenuItem value={"3-6 years"}>3-6 years</MenuItem>
              <MenuItem value={"More than 6 years"}>More than 6 years</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            label="Phone Number *"
            name="phone"
            error={error.phone !== null}
            helperText={error.phone}
            onChange={handleFormChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">+91 </InputAdornment>,
            }}
          />

          <FormLabel style={{ marginTop: betweenSpacing }} component="legend">
            Gender (optional)
          </FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={formData.gender}
            onChange={handleFormChange}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="transgender"
              control={<Radio />}
              label="Transgender"
            />
          </RadioGroup>
        </form>
        {renderActionButton(status)}
      </div>
      <VerifyPhone
        phoneNumber={formData.phone}
        start={startAuth}
        onVerfied={userVerified}
        onStopped={closeVerifyAuth}
      />
    </Container>
  );
}
