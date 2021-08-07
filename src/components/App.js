import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LandingPage from "./landingPage";
import AboutUs from "./aboutUs";
import teamMembers from "./teamMembers";
import Topic from "./Topics";
import TopicsData from "./DemoDatas/TopicsData.js";
import ContactUs from "./ContactUs";

const useStyles = makeStyles((them)=>({
   root:{
    minHeight:"100vh",
    // backgroundImage: `url(${process.env.PUBLIC_URL +'/assets/Cover1.jpg'})`,
    // backgroundSize: "cover",
   }
}));

function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
           <CssBaseline />
           <LandingPage/>
           <Topic TopicsData={TopicsData}/>
           <AboutUs teamMembers={teamMembers}/>
           <ContactUs/>
        </div>
           
    );
};

export default App;