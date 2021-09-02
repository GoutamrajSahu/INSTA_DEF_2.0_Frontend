import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from "@material-ui/core";
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

const[formDetails, setDetails] = useState({
    topicName:"",
    defOn:"",
    definition:"" 
});

const[isError, setError] = useState(false);
const[isSuccess, setSuccess] = useState(false);
const[topicExist, setExist] = useState(true);

function handleChange(event){
    setDetails((previousValue)=>{
        return({
            ...previousValue,
            [event.target.name] : event.target.value
        });
    })
} 

function addToDB(event){ ///Database work need to be done here
    if(formDetails.topicName === "" || formDetails.defOn === "" || formDetails.definition === ""){
     setError(true);
    }else{
        setError(false);
        setSuccess(true);
        setTimeout(()=>{setSuccess(false)}, 3000);
        console.log(formDetails);
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
         {!topicExist?( <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Given topic name doesn't exist. — <strong>check it out!</strong>
            </Alert>):<></>}
           
            <Box className={classes.inputFields}>
             <TextField 
             label="Topic Name" 
             id="outlined-basic" 
             variant="outlined" 
             value={formDetails.topicName}
             name="topicName"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>
           
            <Box className={classes.inputFields}>
             <TextField
             label="Definition on" 
             id="outlined-basic" 
             variant="outlined" 
             value = {formDetails.defOn}
             name="defOn"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>

            <Box className={classes.inputFields}>
             <TextField
             label="Definition" 
             id="outlined-basic" 
             variant="outlined" 
             value = {formDetails.definition}
             name="definition"
             onChange={handleChange}
             autoComplete="off"
             ></TextField>
            </Box>

            <Button variant="contained" className={classes.button} color="primary" onClick={addToDB}>Add</Button>
         </form>
       </Box>
    );
}

export default EditProfile;