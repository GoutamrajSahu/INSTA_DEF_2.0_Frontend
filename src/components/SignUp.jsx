// import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Navbar from "./navbar";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';

const UseStyles = makeStyles((theme)=>({
root:{
    height:"100vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
},
container:{
    minHeight:"50vh",
    width:"30%",
    display:"flex",
    justifyContent:"center"
},
formRoot: {
    '& > *': {
      marginTop: theme.spacing(2),
      width: '99%',
    },
    width:"80%",
    paddingTop:"20px"
  },
button:{
    "&:hover":{
        backgroundColor:"#0F4C63"
    },
    backgroundColor:"#0F4C75",
    color:"white",
    marginTop: theme.spacing(5.5),
  },
}));

function SignUp(){
const classes = UseStyles();

// useEffect(()=>{
//     AOS.init({
//         duration:"2200"
//     });
// },[]);

// function handleChange(event){
//     console.log(event.target.value);
// }

return(
    <>
        <Navbar/>
        <Box className={classes.root}>
            <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40, padding:"10px"}}>
            SIGN_UP
            </Typography>
            <Paper elevation={7} className={classes.container}>
                <form className={classes.formRoot} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="E-mail"/>
                    <TextField
                    id="standard-multiline-static"
                    label="Password"
                    type="password"
                    />
                      <TextField
                    id="standard-multiline-static"
                    label="Retype password"
                    type="password"
                    />
                    <Button
                    variant="contained"
                    className={classes.button}
                    >
                    Sign Up
                    </Button>
                    <NavLink to="/login" style={{textDecoration:"none", fontFamily:"Josefin Sans"}}><h4>Already have an account?</h4></NavLink>
                </form>
                
            </Paper>
        </Box>
        <Footer/>
    </>
);

}

export default SignUp;