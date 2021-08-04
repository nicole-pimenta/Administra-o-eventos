import Cards from "../../components/Cards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #BA5370 30%, #F4E2D8 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Cards />
    </div>
  );
};

export default Home;
