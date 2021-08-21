import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import "aos/dist/aos.css";
import TopicCard from "./TopicCard";

const UseStyles = makeStyles((theme)=>({
       root:{
        //  backgroundColor:"green"
       }
    }));


    function MyTopics(props){

        const classes = UseStyles();

        const myTopics = props.TopicsData.filter(getTopics)
        function getTopics(ele){
          return(ele.creatorEmailId == "grs@gmail.com");
          }
        
        function renderTopics(ele,index){
        return(<TopicCard key={index} topicName={ele.topicName} desc={ele.desc} definitions={ele.definitions} id={ele.id} image={ele.image}/>);
        }

          return(
            <Grid container item xs={12} className={classes.root}>
            {myTopics.map(renderTopics)}
            </Grid>
          );
    }

    export default MyTopics;