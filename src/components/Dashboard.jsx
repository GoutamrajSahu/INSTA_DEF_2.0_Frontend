import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Box,Grid,Typography,Paper} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import QueueIcon from '@material-ui/icons/Queue';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import UpdateIcon from '@material-ui/icons/Update';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root:{
        height:"90vh"
      },
}));

 function Dashboard() {
  const classes = useStyles();

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
              <ListItem component={NavLink} to="/myprofile/topicsdata" button key={"My_Topics"}>
                <ListItemIcon>
                  <LibraryBooksIcon/>
                </ListItemIcon>
                <ListItemText primary={"My_Topics"}/>
              </ListItem>

              <ListItem  component={NavLink} to="/myprofile/editprofile" button key={"Edit_Profile"}>
                <ListItemIcon>
                  <EditIcon/>
                </ListItemIcon>
                <ListItemText primary={"Edit_Profile"}/>
              </ListItem>

              <ListItem component={NavLink} to="/myprofile/addnewtopic" button key={"Add_New_Topic"}>
                <ListItemIcon>
                  <QueueIcon/>
                </ListItemIcon>
                <ListItemText primary={"Add_New_Topic"}/>
              </ListItem>

              <ListItem component={NavLink} to="/myprofile/addnewdef" button key={"Add_New_Def"}>
                <ListItemIcon>
                  <PlaylistAddIcon/>
                </ListItemIcon>
                <ListItemText primary={"Add_New_Def"}/>
              </ListItem>

              <ListItem component={NavLink} to="/myprofile/updatedefs" button key={"Update_Defs"}>
                <ListItemIcon>
                  <UpdateIcon/>
                </ListItemIcon>
                <ListItemText primary={"Update_Defs"}/>
              </ListItem>
        </List>
      </Box>
    </Paper>
  );
}

export default  Dashboard;