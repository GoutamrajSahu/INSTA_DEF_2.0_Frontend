import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import Avatar from "./avatar";

const UseStyles = makeStyles((theme)=>({
    root:{
      height:"90vh",
      marginTop:"10vh",
      display:"flex",
      flexDirection: "column",
      alignItems:"center"
    },
    imgParentContainer:{
       display:"flex",
       paddingTop:25
    },
    aboutInfo:{
        textAlign:"center",
        justifyContent:"content",
        fontFamily:"Karla",
        fontSize:20,
        paddingTop:50
    },
    extras:{
        display:"flex"
    }
}));


function aboutMe(props){
    const classes = UseStyles();
 
    function profiles(ele,index){
        return(<Avatar 
        key={index} 
        name={ele.name} 
        profilePic={ele.image} 
        rollNo={ele.rollNo}
        contribution={ele.contribution} 
        />);
    }

return(
    <Box className={classes.root}>
        <Typography component="div">
        <h1 style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40}}>ABOUT_US</h1>
        </Typography>

        <Box className={classes.imgParentContainer}>
         {props.teamMembers.map(profiles)}    
        </Box>    

        <Typography className={classes.aboutInfo}>
        We are the team <span style={{fontSize:"25px"}}>"Implementation",</span> <br/>and MCA final year students of GIET University.
        </Typography>
    </Box>
);
}

export default aboutMe;