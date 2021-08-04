import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #BA5370 90%, #F4E2D8 20%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 10px",

    justifyContent: "center",
  },

  Toolbar: {
    display: "flex",
    justifyContent: "space-around",
    width: "40%",
    margin: "0 auto",
    marginLeft: "49%",
  },
});

const Header = () => {
  const history = useHistory();
  const classes = useStyles();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.Toolbar}>
        <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
        <MenuItem onClick={() => sendTo("/wedding")}>Wedding</MenuItem>
        <MenuItem onClick={() => sendTo("/graduation")}> Graduation </MenuItem>
        <MenuItem onClick={() => sendTo("/confraternization")}>
          Confraternization
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
