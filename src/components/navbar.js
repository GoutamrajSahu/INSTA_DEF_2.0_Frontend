import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

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

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.bar}>
          <IconButton edge="start" className={classes.icon} color="inherit" aria-label="menu">
            <LibraryBooksRoundedIcon style={{fontSize:30}} />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            INSTA_DEF
          </Typography>
          <Button color="inherit" className={classes.btn}>Home</Button>
          <Button color="inherit" className={classes.btn}>About_us</Button>
          <Button color="inherit" className={classes.btn}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;