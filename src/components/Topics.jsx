import React,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopicCard from "./TopicCard"

const UseStyles = makeStyles((them)=>({
    root:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        width:"100%",
        paddingLeft: "10%",
        paddingRight: "10%",
    },
}));

function Topics(props){
    const classes = UseStyles();

    function renderTopics(ele,index){
    return( 
        <TopicCard key={index} topicName={ele.topicName} desc={ele.desc} image={ele.image}/>
        );
    }

return(
    <Box className={classes.root}>
        <Typography style={{fontFamily:"Josefin Sans", fontWeight:"bolder",fontSize: 40, paddingBottom:"30px"}} data-aos="fade-up">TOPICS</Typography> 
        <Grid container>  
        {props.TopicsData.map(renderTopics)}
        </Grid>
    </Box>
);
}

export default Topics;