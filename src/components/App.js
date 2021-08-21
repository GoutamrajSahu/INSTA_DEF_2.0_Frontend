import React from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import {Route,Switch} from "react-router-dom";
// import TopicsData from "./DemoDatas/TopicsData.js";
import TopicContent from "./TopicContent";
import MyProfile from "./MyProfile";
import CssBaseline from '@material-ui/core/CssBaseline';
import TopicsData from "./DemoDatas/TopicsData.js";
import Navbar from "./navbar";
import Footer from "./Footer";

const useStyles = makeStyles((them)=>({
   root:{
    minHeight:"100vh",
   }
}));

function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <CssBaseline/>
        <Navbar/>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/login" component={Login}/>
           <Route exact path="/signup" component={SignUp}/>
           <Route exact path="/topiccontent/:topicID" component={TopicContent}/>
           <Route path="/myprofile" component={()=><MyProfile TopicsData={TopicsData}/>}/>
        </Switch>
        <Footer/>
        </div>     
    );
};

export default App;