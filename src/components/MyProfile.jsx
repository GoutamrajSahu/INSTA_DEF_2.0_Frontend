import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box,Grid, Typography } from "@material-ui/core";
import "aos/dist/aos.css";
import Paper from '@material-ui/core/Paper';
import Dashboard from "./Dashboard";
import MyTopics from "./MyTopics";
import EditProfile from "./EditProfile";
import AddNewTopics from "./AddNewTopic";
import AddNewDef from "./AddNewDef";
import UpdateDefs from "./UpdateDefs";
import {Redirect, Route} from "react-router-dom";

const UseStyles = makeStyles((theme)=>({
root:{
  height:"100vh",
  paddingTop:"9vh"
},
profilePic:{
    height:150,
    width:150,
    borderRadius:"50px",
    marginLeft:"5%",
    backgroundImage: `url(${process.env.PUBLIC_URL+'assets/myProfilePic1.png'})`,
    backgroundSize: "cover",
    marginTop:"10px"
},
dynamicAreaForDashboard:{
  height:"64vh",
  width:"100%",
  overflow:"hidden",
  overflowY: "scroll"
}
}));

function MyProfile(props){
const classes = UseStyles();

    return(
        <>
                <Grid xs={12} container item className={classes.root}>
                   <Grid item xs={2}>
                     <Dashboard/>
                   </Grid>
                   <Grid item xs={10}>
                      <Paper style={{display:"flex", flexDirection:"row",minHeight:"25vh"}} elevation={1}>
                        <Paper className={classes.profilePic} elevation={10}>
                        </Paper>
                        <Box>
                          <Typography 
                              style={{
                                  fontFamily:"Josefin Sans",
                                  fontWeight:"bolder",
                                  fontSize: 35,
                                  padding:"4px",
                                  marginTop:80
                                  }}>   
                              Goutamraj Sahu
                          </Typography>
                          <Typography 
                          style={{
                                  fontFamily:"Josefin Sans",
                                  fontWeight:"bold",
                                  fontSize: 20,
                                  }}>
                              UserName:___GRS___
                          </Typography>
                        </Box>
                      </Paper>
                      <Box className={classes.dynamicAreaForDashboard}>
                        <Route exact path="/myprofile/topicsdata" render={()=>{return <MyTopics TopicsData = {props.TopicsData}/>}}/>
                        <Route exact path="/myprofile/editprofile" render={()=><EditProfile/>}/>
                        <Route exact path="/myprofile/addnewtopic" render={()=><AddNewTopics/>}/>
                        <Route exact path="/myprofile/addnewdef" render={()=><AddNewDef/>}/>
                        <Route exact path="/myprofile/updatedefs" render={()=><UpdateDefs/>}/>
                        <Redirect to="/myprofile/topicsdata"/>
                      </Box>
                   </Grid>
                </Grid>
        </>
    );


}

export default MyProfile;