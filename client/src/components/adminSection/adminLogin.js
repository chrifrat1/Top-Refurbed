import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
//Admin Logi  form

export default function AdminLogin(){

    const [adminDets, setAdminDets] = useState([])
    //const user;
    //const password;

    useEffect(()=>{
        axios.get('http://localhost:5000/admin').then((admin)=>{ //axios gets admin details from the db and 
        //place them AdminDets
            setAdminDets(admin.data);
        })
    }, [])

    const detailsValidation=()=>{
        //details validation
        //{adminDets.map((admin) => (
            
            
            
            
          //))};
    }
    
    
    return(  // returns interactivitity elements
        <Box>
            <h2>Admin Login</h2>
            <TextField required id="standard-basic" label="Username" variant="standard" /> 
            <TextField required type="password" id="standard-basic" label="Password" variant="standard" />
            <div>
            <Button variant="contained" onClick={detailsValidation}> <NavLink color="inherit" className="link" to='/adminMenu'>Log In</NavLink></Button>
            </div>
            <Box>
                {adminDets.map((admin) => (        
                    <h2>{admin.user},{admin.password}</h2>
                    
                ))}
            </Box>
            
        </Box>
        
    );
}