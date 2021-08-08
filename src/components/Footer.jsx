import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const UseStyles = makeStyles((theme)=>({
root:{
height:"50vh",
width:"100%",
},
grids:{
 display:"flex",
 justifyContent:"center",
 alignItem:"Center"
},
upGrid:{
    height:"30vh"
},
links:{
    textDecoration:"none",
    fontSize:20
},
downTexts:{
    height:"20vh",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    textAlign:"center",
    alignItem:"bottom"
}

}));

function Footer(){
const classes = UseStyles();

function getYear(){
    const year = new Date().getFullYear();
    return(year);
}

    return(
        <Paper className={classes.root} elevation={7}>
           <Grid container xs={12} item>
              <Grid xs={4} item className={classes.grids}>
                <Box className={classes.upGrid}>
                   <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 25, paddingTop:"20px"}}>Location</Typography>
                   <Typography style={{fontFamily:"Josefin Sans",fontSize: 20, padding:"5px"}}>
                    GIET University, <br/>
                    Gunupur,<br/>
                    Rayagada-765022,<br/>
                    Odisha 
                   </Typography>
                </Box>
              </Grid>
              <Grid xs={4} item className={classes.grids}>
                <Box className={classes.upGrid}>
                <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 25, paddingTop:"20px"}}>Menu</Typography>
                   <Typography style={{fontFamily:"Josefin Sans",fontSize: 20, padding:"5px"}}>
                   <a href="#" className={classes.links}> Home</a> <br/>
                   <a href="#" className={classes.links}> Topics </a> <br/>
                   <a href="#" className={classes.links}> My Profile</a> <br/>
                   <a href="#" className={classes.links}> About Us</a> <br/>
                   <a href="#" className={classes.links}> Contact Us </a>
                   </Typography>
                </Box>
              </Grid>
              <Grid xs={4} item className={classes.grids}>
                <Box className={classes.upGrid}>
                <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 25, paddingTop:"20px"}}>Socials</Typography>
                   <a href="#" className={classes.links}><LinkedInIcon style={{color:"#0077b5"}}/> LinkedIn</a> <br/>
                   <a href="#" className={classes.links}><GitHubIcon style={{color:"#171515"}}/> GitHub</a> <br/>
                   <a href="#" className={classes.links}><TwitterIcon style={{color:"#1DA1F2"}}/> Twitter</a> <br/>
                   <a href="#" className={classes.links}><FacebookIcon style={{color:"#4267B2"}}/> Facebook</a> <br/>
                   <a href="#" className={classes.links}><InstagramIcon style={{color:"#8a3ab9"}}/> Instagram</a>                   
                </Box>
              </Grid>
              <Grid xs={12} item className={classes.grids}>
              <Typography className={classes.downTexts}>
                  <a href="#" className={classes.links}> Terms & conditions | Privacy</a>
                  <a href="#" className={classes.links}> instadef@gmail.com</a>
                  Copyright©{getYear()}
              </Typography>
              </Grid>
           </Grid>
        </Paper>
    );

}

export default Footer;