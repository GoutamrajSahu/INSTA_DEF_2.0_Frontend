import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme)=>({
    subImgContainer:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
    },
    imgContainer:{
        height:"160px",
        width:"160px",
        paddingLeft:"10px",
        paddingRight:"10px",
        boxShadow: "15px 20px 20px rgba(0,0,0,0.20)",
        borderRadius:"62% 38% 47% 53% / 36% 48% 52% 64%",
    },
    profilePic:{
        height:"150px",
        width:"150px",
        borderRadius:"62% 38% 47% 53% / 36% 48% 52% 64%"
      },
    extraInfo:{
        paddingRight:20,
        paddingLeft:20,     
        textAlign:"center"
    },
    extraHeading:{
        fontFamily:"Josefin Sans",
        fontWeight: "bold",
        fontSize:30
    },
    headingDetails:{
        fontSize:20,
        fontWeight:"bold"
    }
}));

function avatar(props){
   const classes = UseStyles();
    return (
        <Box className={classes.subImgContainer}>
                 <Box className={classes.imgContainer}>
                 <img className={classes.profilePic} src={props.profilePic} alt="profileImg"></img>
                 </Box>
                 <Box className={classes.extraInfo}>
                     <div className={classes.extraHeading}>
                     {props.name}
                     </div>  
                     <div className={classes.headingDetails}>
                     {props.contribution}
                     </div>
                     <div className={classes.headingDetails}>
                     {props.rollNo}
                     </div>
                 </Box>
             </Box>
    );
}

export default avatar;