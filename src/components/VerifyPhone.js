import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PhoneIcon from "@material-ui/icons/PhonelinkLockRounded";
import CircularProgress from "@material-ui/core/CircularProgress";

const marginVertical = "24px";

const VerifyPhone = ({ phoneNumber, start, onVerfied, onStopped }) => {
  const [confirmationResult, setconfirmationResult] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const [status, setotpStatus] = useState(null);
  const [dialog, setDialog] = useState(false);
  const [otpError, setOtpError] = useState(null);

  useEffect(() => {
    if (start) {
      console.log("starting process");
      setDialog(true);
      startOtpProcess();
    }
  }, [start]);

  const startOtpProcess = () => {
    resolveCapcha();
    requestVerificationCode();
  };

  const resolveCapcha = () => {
    try {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          defaultCountry: "IN",
        }
      );
    } catch (error) {
      console.log("Error in captcha verfication", error);
    }
  };

  const requestVerificationCode = async () => {
    try {
      setotpStatus("sending");
      const number = "+91" + phoneNumber;
      const confirmationResult = await firebase
        .auth()
        .signInWithPhoneNumber(number, window.recaptchaVerifier);
      setconfirmationResult(confirmationResult);
      setotpStatus("sent");
    } catch (error) {
      console.log("Error in request verification code", error);
    }
  };

  const verifyOtp = async () => {
    try {
      setotpStatus("verifying");
      await confirmationResult.confirm(userInput);
      closeDialog();
      onVerfied();
    } catch (error) {
      setOtpError("Invalid OTP.Try again");
      console.log("Error in verifying user input", error);
    }
    window.recaptchaVerifier.clear();
  };

  const closeDialog = () => {
    setDialog(false);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <React.Fragment>
      <Dialog
        disableBackdropClick={true}
        // fullWidth={true}
        open={dialog}
        aria-labelledby="otp-verfication-prompt"
      >
        <DialogTitle
          style={{
            marginTop: marginVertical,
            marginBottom: marginVertical,
            textAlign: "center",
          }}
          id="otp-verfication-prompt"
        >
          {status !== "sent" && otpError == null ? (
            <React.Fragment>
              <CircularProgress />
            </React.Fragment>
          ) : (
            <PhoneIcon fontSize="large" color="primary" />
          )}
          <p style={{ fontSize: "16px" }}>
            {status === "sending" ? (
              "Sending OTP"
            ) : (
              <React.Fragment>
                Enter your OTP
                <p style={{ fontSize: "12px" }}>
                  We have sent OTP to your mobile
                </p>
              </React.Fragment>
            )}
          </p>
        </DialogTitle>
        <DialogContent>
          <TextField
            // autoFocus
            id="otp"
            label="One time password"
            type="text"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            error={otpError !== null}
            helperText={otpError}
          />
        </DialogContent>
        {otpError !== null && (
          <DialogContent style={{ display: "flex", alignItems: "center" }}>
            <p>Did not receive OTP ? </p>
            <Button
              onClick={startOtpProcess}
              color="primary"
              style={{ textDecoration: "underline" }}
            >
              Send again
            </Button>
          </DialogContent>
        )}
        <DialogActions
          style={{
            marginTop: marginVertical,
            marginBottom: "24px",
            justifyContent: "center",
          }}
        >
          <Button
            disabled={status !== "sent"}
            onClick={verifyOtp}
            color="primary"
            variant="contained"
          >
            Verify OTP
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

VerifyPhone.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  start: PropTypes.bool.isRequired,
  onVerfied: PropTypes.func,
  onStopped: PropTypes.func,
};

VerifyPhone.defaultProps = {
  start: false,
  phoneNumber: null,
};

export default VerifyPhone;
