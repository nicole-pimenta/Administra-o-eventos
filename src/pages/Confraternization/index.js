import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,  #fceabb 20%, #E4E5E6 80%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "brown",
    height: "100vh",
    padding: " 0 20px",
  },
});

const Confraternization = () => {
  const classes = useStyles();
  return <div className={classes.root}>Confraternization</div>;
};

export default Confraternization;
