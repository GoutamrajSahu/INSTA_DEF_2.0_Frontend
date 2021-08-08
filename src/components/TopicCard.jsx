import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";

const useStyles = makeStyles({
    media: {
      minHeight: 155,
    },
    card:{
      padding:"10px"
   }
  });
  
 function  TopicCard(props) {
    const classes = useStyles();
  
    useEffect(()=>{
      AOS.init({
        duration:"1700"
      });
    },[]);

    return (
      <Grid item xs={12} sm={3} className={classes.card} data-aos="fade-up">
      <Card className={classes.root} elevation={6}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {props.topicName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
    );
  }

  export default TopicCard;