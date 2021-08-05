import { makeStyles } from "@material-ui/core";
import { useGraduationList } from "../../Providers/Graduation";
import Cards from "../../components/Cards";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #E0EAFC 20%, #E4E5E6 80%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    padding: " 0 20px",
    display: "flex",
    flexWrap: "wrap",
  },
});

const Graduation = () => {
  const classes = useStyles();

  const { graduationList } = useGraduationList();
  return (
    <div className={classes.root}>
      {graduationList.map((drink) => (
        <Cards key={drink.id} beer={drink} buttonCondition />
      ))}
    </div>
  );
};

export default Graduation;
