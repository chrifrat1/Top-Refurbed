import React,{ useEffect, useState} from 'react'
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

export default function ShowOrderHistory(){
    const [detailsList, setDetailsList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/orderHistory').then((allDetails)=>{
            setDetailsList(allDetails.data);
        })
    }, [])

    return(
        <Box>
        {detailsList.map((details) => ( 
            <Box >
            <h2>----------------------------------------------------------------------- </h2>
            
            <h10> Recipient: {details.name}, {details.surname}</h10>
            <div>
            <h10> Delivery Details: {details.road}, {details.number}, {details.city}, {details.postcode} </h10>
            </div>
            
            
            </Box>
          ))}
        </Box>

);
}
