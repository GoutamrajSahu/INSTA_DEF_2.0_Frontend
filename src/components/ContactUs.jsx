import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

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
    height:"70vh",
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

function ContactUs(){
const classes = UseStyles();

useEffect(()=>{
    AOS.init({
        duration:"2200"
    });
},[]);

function handleChange(event){
    console.log(event.target.value);
}

return(
    <Box className={classes.root}>
        <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40, padding:"10px"}} data-aos="fade-up">
        CONTACT_US
        </Typography>
        <Paper elevation={7} className={classes.container} data-aos="fade-up">
            <form className={classes.formRoot} noValidate autoComplete="off">
                <TextField onChange={handleChange} id="standard-basic" label="Full Name"/>
                <TextField id="standard-basic" label="E-mail"/>

                <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={7}
                />

                <Button
                variant="contained"
                className={classes.button}
                endIcon={<SendIcon/>}
                >
                 Send
                </Button>

            </form>
        </Paper>
    </Box>
);

}

export default ContactUs;