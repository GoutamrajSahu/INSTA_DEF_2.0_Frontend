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

const topicDetails = {
    "topicName":"",
    "desc":"",
    "definitions":[]
}

const defDetails = {
    "defOn":"",
    "definition":""
}

const[newTopicDetails, setDetails] = useState(topicDetails);
const[definitionDetails, setDefinition] = useState(defDetails);

const[isError, setError] = useState(false);
const[isSuccess, setSuccess] = useState(false);

function handleChange(event){
    setDetails((previousData)=>{
        return({
            ...previousData,
            [event.target.name]: event.target.value
        });
    });
    // console.log(newTopicDetails);
}

function defHandleChange(event){
    setDefinition((previousData)=>{
        return({
            ...previousData,
            [event.target.name]: event.target.value
        });
    });
    // console.log(definitionDetails);
} 

function addToDB(event){ ///Database work need to be done here
 event.preventDefault();
 if(newTopicDetails.topicName === "" || newTopicDetails.desc === "" || definitionDetails.defOn === "" || definitionDetails.definition === ""){
    setError(true);
 }else{
    setError(false);

    newTopicDetails.definitions.push(definitionDetails)
    console.log("Update to database");
    console.log(newTopicDetails);

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
                Added successfully!!! — <strong>check it out!</strong>
            </Alert>):<></>}

        {/* <Typography className={classes.fieldNames}>Topic Details:</Typography>   */}
        
            <Box className={classes.inputFields}>
             <TextField 
             label="Topic Name" 
             id="outlined-basic" 
             variant="outlined" 
             value={newTopicDetails.topicName}
             name="topicName"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>
           
            <Box className={classes.inputFields}>
             <TextField
             label="Topic Description" 
             id="outlined-basic" 
             variant="outlined" 
             value={newTopicDetails.desc}
             name="desc"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>
          
            <Typography className={classes.fieldNames}>First Definition:</Typography>
           
            <Box className={classes.inputFields}>
             <TextField 
             label="Definition on" 
             id="outlined-basic" 
             variant="outlined" 
             value={definitionDetails.defOn}
             name="defOn"
             onChange={defHandleChange}
             autoComplete="off"
             ></TextField>
            </Box>

            <Box className={classes.inputFields}>
             <TextField 
             label="Definition" 
             id="outlined-basic" 
             variant="outlined" 
             value={definitionDetails.definition}
             name="definition"
             onChange={defHandleChange}
             autoComplete="off"
             multiline
             rows={7}
             ></TextField>
            </Box>

            <Button variant="contained" className={classes.button} color="primary" onClick={addToDB}>Add</Button>
         </form>
       </Box>
    );
}

export default EditProfile;