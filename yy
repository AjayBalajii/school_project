const useStyles = makeStyles((theme) => ({
  ladingpage: {
    flex: 1,
    display: "flex",
    margin: 0,
    padding: "40px",
    backgroundColor: AppConstants.bgColor,
  },
  maincontainer: {
    backgroundColor: "white",
    borderRadius: "24px",
    margin: 0,
    // padding: "8px",
  },
  imgcontainer: {
    padding: "16px",
    height: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderTopLeftRadius:"24px",
    borderBottomLeftRadius:"24px",
  },
}));

const LandingPage = () => {
  const [tab, setTab] = useState("login");
  const toggleTab = () => {
    if (tab === "login") {
      setTab("signup");
    } else {
      setTab("login");
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.ladingpage}>
      <div
        style={{
          position: "absolute",
          display: "hidden",
        }}
        id="recaptcha-container"
      />
      <Grid container className={classes.maincontainer}>
        <Grid item container lg={8} className={classes.imgcontainer}>
          <Typography variant="h6">Yours Tomorrow</Typography>
          <Grid item xs={12} container>
            <Grid item lg={5} xs={12}>
              <p style={{ fontSize: "16px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} >
          {tab === "login" ? (
            <Login changeTab={toggleTab} />
          ) : (
            <SignUp changeTab={toggleTab} />
          )}
        </Grid>
        <Typography
          style={{ marginTop: "-32px", marginLeft: "16px" }}
          variant="body2"
          color="textSecondary"
        >
          {"Copyright © "}
          <Link color="inherit" href="/">
            Your Tomorrow
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
    </div>
  );
};
