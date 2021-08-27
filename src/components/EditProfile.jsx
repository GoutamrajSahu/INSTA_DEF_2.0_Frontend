import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { useState } from "react";
import { Alert, AlertTitle } from '@material-ui/lab';

const UseStyles = makeStyles((theme)=>({
    root:{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer:{
        width: "100vh",
        '& > *': {
            marginTop: theme.spacing(2),
            width: "100%"
           }
    },
    inputFields:{
        '& > *': {
            width:"100%"
           }
    },
    fieldNames:{
        paddingRight:100
    },
    button:{
        backgroundColor:"#0F4C75",
        "&:hover":{
            backgroundColor:"#0F4C63"
        }
    },
})); 

function EditProfile(){
const classes = UseStyles();

const details = {
    "name":"Goutamraj Sahu",
    "email":"grs@gmail.com",
    "username":"___GRS___",
    "password":"asdfghjkl",  
}

const[profileDetails, setDetails] = useState(details);
const[isError, setError] = useState(false);
const[isSuccess, setSuccess] = useState(false);
function handleChange(event){
    setDetails((previousData)=>{
        return({
            ...previousData,
            [event.target.name]: event.target.value
        });
    });
    // console.log(event.target.value);
} 

function addToDB(event){ ///Database work need to be done here
 event.preventDefault();
 if(profileDetails.name === "" || profileDetails.email === "" || profileDetails.username === "" || profileDetails.password === ""){
    setError(true);
 }else{
    setError(false);
    console.log("Update to database");
    console.log(profileDetails);
    setSuccess(true); 
    setTimeout(()=>{setSuccess(false)},3000)
 }
}



    return(
       <Box className={classes.root}>
         <form className={classes.formContainer}>
          
         {isError?(<Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                All fields must be filled. — <strong>check it out!</strong>
            </Alert>):<></>}
         
         {isSuccess?( <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Updated successfully!!! — <strong>check it out!</strong>
            </Alert>):<></>}
           
            <Box className={classes.inputFields}>
             <Typography className={classes.fieldNames}>Name:</Typography>
             <TextField 
             label={profileDetails.name} 
             id="outlined-basic" 
             variant="outlined" 
             value={profileDetails.name}
             name="name"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>
           
            <Box className={classes.inputFields}>
             <Typography className={classes.fieldNames}>Email:</Typography>
             <TextField
             label={profileDetails.email} 
             id="outlined-basic" 
             variant="outlined" 
             value={profileDetails.email}
             name="email"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>
            
            <Box className={classes.inputFields}>
             <Typography className={classes.fieldNames}>Username:</Typography>
             <TextField 
             label={profileDetails.username} 
             id="outlined-basic" 
             variant="outlined" 
             value={profileDetails.username}
             name="username"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>
      
            <Box className={classes.inputFields}>
             <Typography className={classes.fieldNames}>Password:</Typography>
             <TextField id="outlined-basic"
             variant="outlined" 
             type="password" 
             value={profileDetails.password}
             name="password"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>

            <Button variant="contained" className={classes.button} color="primary" onClick={addToDB}>Update</Button>
         </form>
       </Box>
    );
}

export default EditProfile;