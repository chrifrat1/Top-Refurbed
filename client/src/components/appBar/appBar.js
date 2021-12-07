import React, {useState} from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import {NavLink} from 'react-router-dom';
import "./appBar.css";




export default function ButtonAppBar() {

    const toLoginForm=()=>{
     // <Link to="/login">Login</Link>
      alert("diobbestia")
        
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Top Refurbed              -                 
          </Typography>
          <Button color="inherit" ><NavLink className="link" color="inherit" to="/">Catalogue</NavLink></Button> 
          <Button color="inherit"><NavLink className="link" color="inherit" to="/login"> Login</NavLink></Button>
          <Button color="inherit"><NavLink className="link" color="inherit" to="/adminLogin"> Private Section</NavLink></Button>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}