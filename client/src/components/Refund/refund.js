import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import { APPLE_IPAD_PRO, Apple_Iphone_11_Pro, GOOGLE_PIXEL_6, HUAWEI_P20, REFUND_PENDING, SAMSUNG_GALAXY_S21, SAMSUNG_GALAXY_Z_FOLD_2 } from '../../constants/constants';
//import './buyProduct'


const items = [
    {
      value: SAMSUNG_GALAXY_S21,
      label: SAMSUNG_GALAXY_S21,
    },
    {
      value: APPLE_IPAD_PRO,
      label: APPLE_IPAD_PRO,
    },
    {
      value: SAMSUNG_GALAXY_Z_FOLD_2,
      label: SAMSUNG_GALAXY_Z_FOLD_2,
    },
    {
      value: Apple_Iphone_11_Pro,
      label: Apple_Iphone_11_Pro,
    },
    {
      value: HUAWEI_P20,
      label: HUAWEI_P20,
    },
    {
      value: GOOGLE_PIXEL_6,
      label: GOOGLE_PIXEL_6,
    },
  ];

export default function RefundForm(){

    const [refund, setRefund]= useState({
        item:'',
        name: '',
        surname: '',
        comment: '',
        status: REFUND_PENDING,
        
    });

    const Submit=()=>{
        axios.post('http://localhost:5000/refunds',refund).then(()=>{
            window.location.reload(false);
        }) 
    }


    return(
        
        <Box>
            <h2>Refund Form</h2>
            <div>
            <h4>Please, Select item</h4>
            </div>
            <Box>
                
            <TextField
          id="outlined-select-item"
          select
          value={refund.item}
          onChange={ (event) => 
            {setRefund({...refund,item: event.target.value})}}
          label="Select"
          helperText="Please select your product"
        >
          {items.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Box>
            <Box>
                <div>
                <h4>Personal Details</h4>
                </div>
                <TextField required id="filled-basic" label="Name" value={refund.name} 
                    onChange={ (event) => 
                        {setRefund({...refund,name: event.target.value})}} variant="filled" />
                <TextField required id="filled-basic" label="Surname"  value={refund.surname} 
                    onChange={ (event) => 
                        {setRefund({...refund,surname: event.target.value})}} variant="filled" />

             </Box>  
             <Box>
             <TextField required id="filled-basic" label="Reason for refund" width='100%' value={refund.comment} 
                    onChange={ (event) => 
                        {setRefund({...refund,comment: event.target.value})}} variant="filled" />
             </Box>


             <Button variant="contained" onClick={Submit} disabled={!refund.item, !refund.name, !refund.surname} >
                 <NavLink className="link" color="inherit" to="/requestSubmitted">Submit Request</NavLink></Button>
            

        </Box>
    );
}