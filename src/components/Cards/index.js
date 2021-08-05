import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useWeddingList } from "../../Providers/Wedding";

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    width: 280,
    height: 490,
    margin: " 6px",
    borderRadius: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  media: {
    height: "230px",
    width: "20%",
    objectFit: "scale-down",
    margin: "8px auto 0px ",
  },

  displayButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    margin: "2px",
  },
});

const Cards = ({ beer, createButton }) => {
  const classes = useStyles();

  const { name, image_url, tagline, first_brewed, volume } = beer;

  const { addToList } = useWeddingList();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image_url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tagline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {first_brewed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {volume.value}litres
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.displayButtons}>
        {createButton === true ? (
          <div>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Remove Item
            </Button>
          </div>
        ) : (
          <div>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={() => addToList(beer)}
            >
              Wedding
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Graduation
            </Button>

            <Button
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Confraternization
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  );
};

export default Cards;
