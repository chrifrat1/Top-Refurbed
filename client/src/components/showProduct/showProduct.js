//import React,{ useEffect, useState} from 'react'
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
//import axios from 'axios';
//import IconButton from '@material-ui/core/IconButton';
import React, {useState} from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
import {NavLink} from 'react-router-dom';
//import { height } from '../../../../../MERNproject/client/node_modules/@mui/system';



const images = [
    {
      url: '/static/images/buttons/samsung.png',
      title: <Button color="inherit" >
        <NavLink className="link" color="inherit" to="/samsungs21">Samsung Galaxy S21
        </NavLink></Button>,
      width: '40%',
    },
    {
      url: '/static/images/buttons/iphone11pro.jpg',
      title: <Button color="inherit" >
        <NavLink className="link" color="inherit" to="/apple11pro">Apple IPhone 11 Pro
        </NavLink></Button>,
      width: '40%',
    },
    {
      url: '/static/images/buttons/huaweip20.jpg',
      title: <Button color="inherit" >
        <NavLink className="link" color="inherit" to="/huaweip20">HUAWEI P20
        </NavLink>
      </Button>,
      width: '40%',
    },
    {
        url: '/static/images/buttons/galaxyzfold2.jpg',
        title: <Button color="inherit" >
        <NavLink className="link" color="inherit" to="/zfold2">Samsung Galaxy Z Fold 2
        </NavLink>
      </Button>,
        width: '40%',
    },
    {
      url: '/static/images/buttons/ipadpro.jpg',
      title: <Button color="inherit" >
      <NavLink className="link" color="inherit" to="/ipadpro">Apple IPad Pro
      </NavLink>
    </Button>,
      width: '40%',
      
    },
    {
      url: '/static/images/buttons/googlepixel6.png',
      title: <Button color="inherit" >
      <NavLink className="link" color="inherit" to="/pixel6">Google Pixel 6
      </NavLink>
    </Button>,
      width: '40%',
    },
  ];

  
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));


  export default function ButtonBases() {

    
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '55%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    );
  }

