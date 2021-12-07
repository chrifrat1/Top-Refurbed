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
import './buyProduct'

import { SAMSUNG_GALAXY_S21 } from '../../constants/constants';
import { Menu } from '@material-ui/core';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function Purchase() {
    const [value, setValue] = React.useState(0);
    const [item, setItem] = React.useState(0);

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeForm = (event, newValue) => {
      setItem(event.target.value);
    };
  
    const [details, setOrderDets]= useState({
      item:'',
      name: '',
      surname: '',
      road: '',
      number: '',
      city: '',
      postcode:'',
      cardnum:'',
      expirydate:'',
      cvv:''
      
  });

  const orderProduct=()=>{
    axios.post('http://localhost:5000/orderHistory',details).then(()=>{
        window.location.reload(false);
    }) 
}

    return (
      <Box sx={{ width: '60%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Buy Product" {...a11yProps(0)} />
            
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <h4>Item</h4>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Item</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={item}
              label="Item"
              onChange={handleChangeForm}
            >
            <MenuItem value={SAMSUNG_GALAXY_S21} label='Item' onChange={(event) => 
          { setOrderDets({...details,item: event.target.value})}}>{SAMSUNG_GALAXY_S21}</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

            <h4>Recipient Details</h4>
            <TextField required id="filled-basic" label="Name" variant="filled" value={details.name} onChange={(event) => 
          { setOrderDets({...details,name: event.target.value})}} />
            <TextField required id="filled-basic" label="Surname" variant="filled" value={details.surname} onChange={(event) => 
          {setOrderDets({...details,surname: event.target.value})}}/>
            <h4>Delivery Details</h4>


            <TextField required id="filled-basic" label="Road" variant="filled" value={details.road} onChange={(event) => 
          {setOrderDets({...details,road: event.target.value})}}/>
            <TextField required id="filled-basic" label="Number" variant="filled" value={details.number} onChange={(event) => 
          {setOrderDets({...details,number: event.target.value})}}/>
            <TextField required id="filled-basic" label="City/Town" variant="filled" value={details.city} onChange={(event) => 
          {setOrderDets({...details,city: event.target.value})}}/>
            <TextField required id="filled-basic" label="Post Code" variant="filled" value={details.postcode} onChange={(event) => 
          {setOrderDets({...details,postcode: event.target.value})}}/>
            <h4>Payment Details</h4>


            <TextField required id="filled-basic" label="Card Number" variant="filled" value={details.cardnum} onChange={(event) => 
          {setOrderDets({...details,cardnum: event.target.value})}}/>
            <TextField required id="filled-basic" label="Expiry Date" variant="filled" value={details.expirydate} onChange={(event) => 
          {setOrderDets({...details,expirydate: event.target.value})}}/>
            <TextField required id="filled-basic" label="CVV" variant="filled" value={details.cvv} onChange={(event) => 
          {setOrderDets({...details,cvv: event.target.value})}}/>

          

            <Button variant="contained" onClick={orderProduct}><NavLink className="link" color="inherit" to="/orderConf">Buy Now</NavLink></Button>

        </TabPanel>
        
      </Box>
    );
  }