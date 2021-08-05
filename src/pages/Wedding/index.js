import { makeStyles } from "@material-ui/core";
import { useWeddingList } from "../../Providers/Wedding";
import Cards from "../../components/Cards";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,  #ECE9E6 20%, #E4E5E6 80%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    padding: " 0 20px",
    display: "flex",
    flexWrap: "wrap",
  },
});

const Wedding = () => {
  const classes = useStyles();

  const { weddingList } = useWeddingList();

  console.log(weddingList);
  return (
    <div className={classes.root}>
      {weddingList.map((drink) => (
        <Cards key={drink.id} beer={drink} buttonCondition />
      ))}
    </div>
  );
};

export default Wedding;
