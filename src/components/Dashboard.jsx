import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Box,Typography,Paper} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EditIcon from '@material-ui/icons/Edit';
import QueueIcon from '@material-ui/icons/Queue';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import UpdateIcon from '@material-ui/icons/Update';


const useStyles = makeStyles((theme) => ({
    root:{
        height:"90vh"
      },
    clickStyle:{
      backgroundColor: "#0F4C75",
      color:"white",
      "&:hover":{
        backgroundColor: "#0F4C63",
      },
      transition:"0.5s",

    }
}));

 function Dashboard() {
  const classes = useStyles();
  const[currentClicked, changeClick] = useState("My_Topics");

  function addClickStyle(event){
    // console.log(event.target.innerText)
    changeClick(event.target.innerText) 
  }

  const listItems = [
    {
      "to":"/myprofile",
      "itemName":"My_Topics",
      "icon":<LibraryBooksIcon/>
    },
    {
      "to":"/myprofile/editprofile",
      "itemName":"Edit_Profile",
      "icon":<EditIcon/>
    },
    {
      "to":"/myprofile/addnewtopic",
      "itemName":"Add_New_Topic",
      "icon":<QueueIcon/>
    },
    {
      "to":"/myprofile/addnewdef",
      "itemName":"Add_New_Def",
      "icon":<PlaylistAddIcon/>
    },
    {
      "to":"/myprofile/updatedefs",
      "itemName":"Update_Defs",
      "icon":<UpdateIcon/>
    },
  ]
  
    function renderListItems(ele, index){
      return(
        <ListItem component={NavLink} to={ele.to} 
        button key={ele.itemName} 
        onClick={addClickStyle} 
        className={currentClicked===ele.itemName? classes.clickStyle:""}>
        {ele.icon}
        <ListItemText primary={ele.itemName} style={{marginLeft:15}}/>
        </ListItem>
      );
    };

  return (
    <Paper className={classes.root}>
      <Box>
        <div className={classes.toolbar} />
        <Typography 
             style={{
             fontFamily:"Josefin Sans",
             fontWeight:"bolder",
             fontSize: 25,
             textAlign: "center"
             }}>
             DASHBOARD
        </Typography>
        <Divider />
        <List>
             {listItems.map(renderListItems)}
        </List>
      </Box>
    </Paper>
  );
}

export default  Dashboard;