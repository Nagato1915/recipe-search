import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  },
  toolBar: {
    width: "100%",
    maxWidth: 1000
  },
  search: {
   display: "flex",
   justifyContent: "spaceAround",
   width: "50vw",
   marginLeft: "2rem"
  },
  searchField: {
    fontSize: "1.1rem",
    color: "rgba(235, 234, 234, 1)",
    marginLeft: "1.5rem",
    paddingLeft: "1rem" ,
    backgroundColor: "rgba(235, 234, 234, .25 )",
    borderRadius: ".2rem"
  }, 
  button: {
    corsor: "pointer",
    borderRadius: ".2rem",
    border: "none",
    outline: "none",
  }
})



const SearchField = ({search, handleSearch, handleSubmit}) => {
  const classes = useStyles();

  return(
    <div className={classes.grow}>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5" noWrap>
            Find Your Recipe
          </Typography>
          <div className={classes.search}>
            <InputBase className={classes.searchField} placeholder="Search..." value={search} onChange={(e) => handleSearch(e)} />
            <button className={classes.button} onClick={(e) => handleSubmit(e)}>Search</button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default SearchField;