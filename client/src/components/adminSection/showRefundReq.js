import React,{ useEffect, useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import {NavLink} from 'react-router-dom';
import { REFUND_CONFIRMED, REFUND_DENIED, REFUND_PENDING } from '../../constants/constants';
import { TextField } from '@material-ui/core';



const statuses = [
    {
      value: REFUND_CONFIRMED,
      label: REFUND_CONFIRMED,
    },
    {
      value: REFUND_DENIED,
      label: REFUND_DENIED,
    },
    {
      value: REFUND_PENDING,
      label: REFUND_PENDING,
    },
  ];
export default function ManageRefundRequests(){

    const [refundList, setRefundList] = useState([])
    const status=''

    useEffect(()=>{
        axios.get('http://localhost:5000/refunds').then((allRefunds)=>{
            setRefundList(allRefunds.data);
        })
    }, [])

    const SaveChanges=()=>{
        axios.post('http://localhost:5000/refunds',status).then(()=>{
            window.location.reload(false);
        }) 
    }

    return(
        <Box>
        {refundList.map((details) => ( 
            <Box >
            <h2>----------------------------------------------------------------------- </h2>
            
            <h10> Name: {details.name}</h10>
            <div>
            <h10> Delivery Details: {details.surname}</h10>
            </div>
            <h10> Item: {details.item}</h10>
            <div>
            <h10>Reason: {details.comment} </h10>   
            </div>
            <div>
            <h10>Status:</h10>   
            </div>
            <TextField
          id="outlined-select-item"
          select
          label="Select"
          value={status}
            
          helperText="Select a new status"
        >
          {statuses.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            <h2>----------------------------------------------------------------------- </h2>
            

            
            </Box>
            
          ))}
          <Button variant="contained">Save Changes</Button>
        </Box>
        
        
    );
}