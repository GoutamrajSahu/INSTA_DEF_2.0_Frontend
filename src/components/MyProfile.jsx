import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Navbar from "./navbar";
import { Box,Grid, Typography } from "@material-ui/core";
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
import reading from './icons/reading1.svg';
import AOS from 'aos';
import "aos/dist/aos.css";
import Footer from "./Footer";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import DefCard from './DefCard';
import TopicCard from "./TopicCard";


const UseStyles = makeStyles((theme)=>({
root:{
  height:"100vh",
  paddingTop:"9vh"
},
profilePic:{
    height:150,
    width:150,
    borderRadius:"50px",
    // transform: "translateY(-100px)",
    marginLeft:"5%",
    backgroundImage: `url(${process.env.PUBLIC_URL+'assets/myProfilePic1.png'})`,
    backgroundSize: "cover",
    marginTop:"10px"
},
dashboard:{
  height:"90vh"
},
MyTopics:{
  height:"64vh",
  width:"100%",
  // backgroundColor:"green",
  overflow:"hidden",
  overflowY: "scroll"
}
}));

function MyProfile(props){
const classes = UseStyles();

const myTopics = props.TopicsData.filter(getTopics)
function getTopics(ele){
  return(ele.creatorEmailId == "grs@gmail.com");
  }

function renderTopics(ele,index){
return(<TopicCard key={index} topicName={ele.topicName} desc={ele.desc} definitions={ele.definitions} id={ele.id} image={ele.image}/>);
}

    return(
        <>
           <Navbar/>
                <Grid xs={12} container item className={classes.root}>
                   <Grid item xs={2}>
                       <Paper className={classes.dashboard} elevation={4}>
                       <Typography 
                            style={{
                                fontFamily:"Josefin Sans",
                                fontWeight:"bolder",
                                fontSize: 25,
                                textAlign: "center"
                                }}>
                            DASHBOARD
                        </Typography>
                       </Paper>
                   </Grid>
                   <Grid item xs={10}>
                      {/* <Card className={classes.backGround} elevation={4}>
                      </Card> */}
                      <Paper style={{display:"flex", flexDirection:"row",minHeight:"25vh"}} elevation={3}>
                        <Paper className={classes.profilePic} elevation={10}>
                        </Paper>
                        <Typography 
                            style={{
                                fontFamily:"Josefin Sans",
                                fontWeight:"bolder",
                                fontSize: 35,
                                padding:"10px",
                                marginTop:110
                                }}>
                            Goutamraj Sahu
                        </Typography>
                      </Paper>
                      <Grid container item xs={12} className={classes.MyTopics}>
                       {myTopics.map(renderTopics)}
                      </Grid>
                   </Grid>
                </Grid>
           <Footer/>
        </>
    );


}

export default MyProfile;