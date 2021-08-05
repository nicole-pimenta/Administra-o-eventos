import Cards from "../../components/Cards";
import { makeStyles } from "@material-ui/core/styles";
import { useDrinks } from "../../Providers/Drinks";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #BA5370 30%, #F4E2D8 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
  },
});

const Home = () => {
  const { beers } = useDrinks();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {beers.map((beer) => (
        <Cards key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default Home;
