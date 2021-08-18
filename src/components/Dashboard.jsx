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
          {["Edit_Profile", "Add_New_Topic", "Add_New_Def", "Update_Defs"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default  Dashboard;