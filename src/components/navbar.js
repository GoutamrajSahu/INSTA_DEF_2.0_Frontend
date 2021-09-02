import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import { NavLink } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bar:{
    backgroundColor:"#0F4C75",
    // backgroundColor:"#54E346",
  },
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "consolas",
    fontSize: 35,
    fontWeight: "bold"
  },
  btn:{
    fontFamily: "Montserrat",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 30
  }
}));

 function ButtonAppBar() {
  const classes = useStyles();

  const history = useHistory();

  function handleRoute(event){ 
    const ID = event.target.innerText;
        if(ID === "HOME" || ID === "ICON"){
            history.push("/");
        }else if(ID === "TOPICS"){
            history.push("/");
        }else if(ID === "ABOUT_US"){
            history.push("/");
        }else if(ID === "CONTACT_US"){
            history.push("/");
        }
    }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.bar}>
          <IconButton edge="start" className={classes.icon} color="inherit" aria-label="menu">
           <Scroll to="landingPage" smooth={true}>
              <span id="ICON" onClick={handleRoute}>
                <LibraryBooksRoundedIcon style={{fontSize:30, color:"white"}} />
              </span>
           </Scroll>
            
          </IconButton>
            <Typography variant="h4" className={classes.title}>
              INSTA_DEF
            </Typography>
  
          <Scroll to="landingPage" smooth={true}>
            <span style={{textDecoration:"none", color:"white"}} id="HOME" onClick={handleRoute}>
             <Button color="inherit" className={classes.btn}>Home</Button>
            </span>
          </Scroll>

          <Scroll to="topics" smooth={true}>
            <span style={{textDecoration:"none", color:"white"}} id="TOPICS" onClick={handleRoute}>
             <Button color="inherit" className={classes.btn}>Topics</Button>
            </span>
          </Scroll>
         
          <NavLink  to="/myprofile/topicsdata" style={{textDecoration:"none", color:"white"}} >
           <Button color="inherit" className={classes.btn}>My_profile</Button>
          </NavLink>  
          
          <NavLink  to="/login" style={{textDecoration:"none", color:"white"}} >
           <Button color="inherit" className={classes.btn}>Login</Button>
          </NavLink>
          
          <NavLink  to="/signup" style={{textDecoration:"none", color:"white"}} >
           <Button color="inherit" className={classes.btn}>Sign_up</Button>
          </NavLink>
          
          <NavLink  to="#" style={{textDecoration:"none", color:"white"}} >
           <Button color="inherit" className={classes.btn}>Logout</Button>
          </NavLink>

          <Scroll to="aboutUs" smooth={true}>
            <span style={{textDecoration:"none", color:"white"}} id="ABOUT_US" onClick={handleRoute}>
             <Button color="inherit" className={classes.btn}>About_us</Button>
            </span>
          </Scroll>
          
          <Scroll to="contactUs" smooth={true}>
            <span style={{textDecoration:"none", color:"white"}} id="CONTACT_US" onClick={handleRoute}>
            <Button color="inherit" className={classes.btn}>Contact_US</Button>
            </span>
          </Scroll>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;