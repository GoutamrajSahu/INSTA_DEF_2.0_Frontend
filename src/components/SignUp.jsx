// import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import qs from "qs";
import { useHistory } from "react-router-dom";
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

const [signupDetails, setDetails] = useState({
    email:"",
    password:""
});
const [retypePassword, setRetypePassword] = useState({
    retypePass:""
});
const [passwordNotMatch, setBool] = useState(false);
const [emptyFieldError, setError] = useState(false);
const [emailRegistered, setCheckMail] = useState(false);

const history = useHistory();
// useEffect(()=>{
// },[]);

function handleChange(event){
   setDetails((previousValues)=>{
       return({
            ...previousValues,
            [event.target.name] : event.target.value   
       });
   })
//    console.log(signupDetails);
}

function handleChangeForRetypePass(event){
    setRetypePassword((previousValues)=>{
        return({
             ...previousValues,
             [event.target.name] : event.target.value   
        });
    })
    // console.log(retypePassword.retypePassword)
 }

 function addUser(event){
   if(signupDetails.email === "" || signupDetails.password === "" || retypePassword.retypePassword === ""){
       setError(true);
   }else{
       setError(false);
        if(signupDetails.password != retypePassword.retypePass){
            setBool(true);
        }
        else{
            setBool(false);
            axios.post("http://localhost:5000/signup",qs.stringify(signupDetails))
            .then((res)=>{
                if(res.data == true){
                    history.push("/login");
                }else{
                    setCheckMail(true);
                }
            }) // coming from backend
            
            // axios({
            //     method:"POST",
            //     url:'http://localhost:5000/',
            //     data: qs.stringify(signupDetails),
            //     headers: {"Content-Type":"application/x-www-form-urlencoded"}
            //   }).then((res)=>{console.log(res.data)}) // coming from backend

            // console.log(signupDetails);
        }
   }
 }



return(
    <>
        <Box className={classes.root}>
            <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40, padding:"10px"}}>
            SIGN_UP
            </Typography>
            <Paper elevation={7} className={classes.container}>
                <form className={classes.formRoot} noValidate autoComplete="off">

                    {passwordNotMatch?(<Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Dissimilar passwords entered. — <strong>check it out!</strong>
                    </Alert>):<></>}
                    
                    {emptyFieldError?(<Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    All fields must be filled. — <strong>check it out!</strong>
                    </Alert>):<></>}

                    {emailRegistered?(<Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Email already registered. — <strong>check it out!</strong>
                    </Alert>):<></>}

                    <TextField 
                    id="standard-basic" 
                    label="E-mail"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={signupDetails.email}
                    />

                    <TextField
                    id="standard-multiline-static"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={signupDetails.password}
                    />

                    <TextField
                    id="standard-multiline-static"
                    label="Retype password"
                    type="password"
                    name="retypePass"
                    onChange={handleChangeForRetypePass}
                    value={retypePassword.retypePass}
                    />

                    <Button
                    variant="contained"
                    className={classes.button}
                    onClick={addUser}
                    >
                    Sign Up
                    </Button>
                    <NavLink to="/login" style={{textDecoration:"none", fontFamily:"Josefin Sans"}}><h4>Already have an account?</h4></NavLink>
                </form>
                
            </Paper>
        </Box>
    </>
);

}

export default SignUp;