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
//order confirmation form
export default function ShowConfirmation(){
    const [detailsList, setDetailsList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/orderHistory').then((allDetails)=>{
            setDetailsList(allDetails.data);
        })
    }, [])

    return( //once the product is bought the user is directed in a order confirmed page
        <Box>
        {detailsList.map((details) => ( 
            <Box >
            <h2>Order Confirmed! </h2>
            
            <h10> Recipient: {details.name}, {details.surname}</h10>
            <div>
            <h10> Delivery Details: {details.road}, {details.number}, {details.city}, {details.postcode} </h10>
            </div>
            <h10> Item: {details.item} </h10>
            
            
            </Box>
          ))}
        </Box>

        /*<>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {detailsList.map((details, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {details.name}
              </TableCell>
              <TableCell align="right">{details.surname}</TableCell>
              <TableCell align="right">{details.road}</TableCell>
              <TableCell align="right">{details.number}</TableCell>
              <TableCell align="right">{details.city}</TableCell>
              <TableCell align="right">{details.postcode}</TableCell>
              <TableCell align="right">
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>*/
    );
}