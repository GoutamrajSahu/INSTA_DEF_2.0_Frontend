import React from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import {Route,Switch} from "react-router-dom";

const useStyles = makeStyles((them)=>({
   root:{
    minHeight:"100vh",
   }
}));

function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/login" component={Login}/>
           <Route exact path="/signup" component={SignUp}/>
        </Switch>
        </div>     
    );
};

export default App;