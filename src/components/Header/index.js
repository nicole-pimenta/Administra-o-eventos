import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #BA5370 90%, #F4E2D8 20%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 76,

    marginBottom: "5px;",
    boxSizing: "border-box",
  },

  Toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "-5px",
    width: "80%",
    margin: "0 auto",
  },

  item: {},
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
        <MenuItem
          onClick={() => sendTo("/confraternization")}
          className={classes.item}
        >
          Confraternization
        </MenuItem>
        <MenuItem onClick={() => sendTo("/wedding")} className={classes.item}>
          Wedding
        </MenuItem>
        <MenuItem
          onClick={() => sendTo("/graduation")}
          className={classes.item}
        >
          Graduation
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
