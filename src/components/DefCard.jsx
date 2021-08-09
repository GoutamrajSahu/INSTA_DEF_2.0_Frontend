// import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import AOS from 'aos';
// import "aos/dist/aos.css";

const useStyles = makeStyles({
    media: {
      minHeight: 70,
    },
    card:{
      paddingLeft:"10%",
      paddingRight:"10%",
      padding:"10px"
   }
  });
  
 function  DefCard(props) {
    const classes = useStyles();
  
    // useEffect(()=>{
    //   AOS.init({
    //     duration:"1700"
    //   });
    // },[]);

    return (
      <Grid item xs={12} sm={12} className={classes.card}>
      <Card className={classes.root} elevation={2}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {props.defOn}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {props.definition}
            </Typography>
          </CardContent>
      </Card>
    </Grid>
    );
  }

  export default DefCard;