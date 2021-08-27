import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import DefCard from "./DefCard";
import TopicsData from "./DemoDatas/TopicsData.js";


const UseStyles = makeStyles((them)=>({
    root:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        minHeight:"90vh",
        width:"100%",
        paddingTop:"10vh",
        // paddingRight: "10%",
    },
}));

function TopicContent(props){
    const classes = UseStyles();
    
    console.log(props.match.params.topicID);

    // here "props.match.params.topicID" gives the unique id of the topic dynamically.
    const ID = props.match.params.topicID;
    const [definitions,setDefinitions] = useState(TopicsData[ID].definitions); // this line will change while backend implementation.

    console.log(definitions);

    function renderDefinitions(ele,index){
        return (<DefCard key={index} defOn={ele.defOn} definition={ele.definition}/>);
    }


return(
    <>
    <CssBaseline />
        <Box className={classes.root}>
            <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40}}>
            {TopicsData[ID].topicName}
            </Typography> 
            <Grid container>  
            {definitions.map(renderDefinitions)}
            </Grid>
        </Box>
    </>
);
}

export default TopicContent;