import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import "aos/dist/aos.css";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import axios from "axios";
import qs from "qs";

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
    minHeight:"40vh",
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

function Login(){
const classes = UseStyles();
const [formData, setData] = useState({
    email:"",
    password:""
});
const [emptyFieldError, setError] = useState(false);
const [wrongInput, setWrong] = useState(false); /// will change according to the response of backend authentication

    function handelChange(event){
        setData((previousData)=>{
            return({
                    ...previousData,
                    [event.target.name]:event.target.value
                });
        });
        // console.log(formData);
    }

    function authenticate(event){
        if(formData.email === "" || formData.password === ""){
            setError(true);
        }else{
            setError(false);
            axios.post("http://localhost:5000/login",qs.stringify(formData))
            .then(
                (res)=>{console.log(res.data)}// Coming from backend 
                // Write code for redirect user to home page if user is authenticated successfully.
                ); 
        }
    }


return(
    <>
        <Box className={classes.root}>
            <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40, padding:"10px"}}>
            LOGIN
            </Typography>
            <Paper elevation={7} className={classes.container}>
                <form className={classes.formRoot} noValidate autoComplete="off">

                    {emptyFieldError?(<Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    All fields must be filled. — <strong>check it out!</strong>
                    </Alert>):<></>}

                    {wrongInput?(<Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Wrong password or email entered. — <strong>check it out!</strong>
                    </Alert>):<></>}

                    <TextField
                    id="standard-basic" 
                    label="E-mail"
                    onChange={handelChange}
                    type="email"
                    name="email"
                    />
                    <TextField
                    id="standard-multiline-static"
                    label="Password"
                    type="password"
                    onChange={handelChange}
                    name="password"
                    />
                    <Button
                    variant="contained"
                    className={classes.button}
                    onClick={authenticate}
                    >
                    Login
                    </Button>
                    <NavLink to="#" style={{textDecoration:"none", fontFamily:"Josefin Sans"}}><h4>Forgot password?</h4></NavLink>
                    <NavLink to="/signup" style={{textDecoration:"none", fontFamily:"Josefin Sans"}}><h4>New?</h4></NavLink>
                </form>
                
            </Paper>
        </Box>
    </>
);

}

export default Login;