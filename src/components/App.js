import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";
import teamMembers from "./teamMembers";

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
           <LandingPage/>
           <AboutMe teamMembers={teamMembers}/>
           <CssBaseline />
        </div>
           
    );
};

export default App;