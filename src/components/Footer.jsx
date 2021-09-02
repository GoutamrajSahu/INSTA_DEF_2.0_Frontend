// import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
// import AOS from 'aos';
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
import { NavLink } from "react-router-dom";
import { Link as Scroll} from 'react-scroll';
import { useHistory } from "react-router-dom";

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
    fontSize:20,
    cursor:"pointer"
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

const history = useHistory();
  
function handleRoute(event){ 
const ID = event.target.id;
    if(ID === "HOME"){
        history.push("/");
    }else if(ID === "TOPICS"){
        history.push("/");
    }else if(ID === "MY_PROFILE"){
        history.push("/myprofile");
    }else if(ID === "ABOUT_US"){
        history.push("/");
    }else if(ID === "CONTACT_US"){
        history.push("/");
    }
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
                   
                        <Scroll to="landingPage" smooth={true}>
                            <span className={classes.links} id="HOME" onClick={handleRoute}> Home</span> <br/>
                        </Scroll>

                        <Scroll to="topics" smooth={true}>
                            <span className={classes.links} id="TOPICS" onClick={handleRoute}> Topics</span> <br/>
                        </Scroll>

                        <span className={classes.links} id="MY_PROFILE" onClick={handleRoute}> My Profile</span> <br/>

                        <Scroll to="aboutUs" smooth={true}>
                            <span className={classes.links} id="ABOUT_US" onClick={handleRoute}> About Us</span> <br/>
                        </Scroll>
                        
                        <Scroll to="contactUs" smooth={true}>
                            <span className={classes.links} id="CONTACT_US" onClick={handleRoute}> Contact Us</span> <br/>
                        </Scroll>

                   </Typography>
                </Box>
              </Grid>
              <Grid xs={4} item className={classes.grids}>
                <Box className={classes.upGrid}>
                <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 25, paddingTop:"20px"}}>Socials</Typography>
                   <NavLink to="#" className={classes.links}><LinkedInIcon style={{color:"#0077b5"}}/> LinkedIn</NavLink> <br/>
                   <NavLink to="#" className={classes.links}><GitHubIcon style={{color:"#171515"}}/> GitHub</NavLink> <br/>
                   <NavLink to="#" className={classes.links}><TwitterIcon style={{color:"#1DA1F2"}}/> Twitter</NavLink> <br/>
                   <NavLink to="#" className={classes.links}><FacebookIcon style={{color:"#4267B2"}}/> Facebook</NavLink> <br/>
                   <NavLink to="#" className={classes.links}><InstagramIcon style={{color:"#8a3ab9"}}/> Instagram</NavLink>                   
                </Box>
              </Grid>
              <Grid xs={12} item className={classes.grids}>
              <Typography className={classes.downTexts}>
                  <NavLink to="#" className={classes.links}> Terms & conditions | Privacy</NavLink>
                  <NavLink to="#" className={classes.links}> instadef@gmail.com</NavLink>
                  Copyright©{getYear()}
              </Typography>
              </Grid>
           </Grid>
        </Paper>
    );

}

export default Footer;