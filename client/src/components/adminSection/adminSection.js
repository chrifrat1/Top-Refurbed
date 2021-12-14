import React,{ useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import {NavLink} from 'react-router-dom';

export default function AdminMenu(){
    return(
        
        <Box>
            <h2>Admin Menu</h2>
            <Button variant="contained"><NavLink className="link" color="inherit" to="/orderHistory">Show Orders</NavLink></Button>
            <Button variant="contained">Add Product</Button>
            <Button variant="contained"><NavLink className="link" color="inherit" to="/refundRequests" >Refund Requests</NavLink></Button>
            
        </Box>
    );


}
