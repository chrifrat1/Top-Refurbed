import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    //const [usersList, setStudentList] = useState([])
    const [posts]= React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [user, setUserDets]= useState({
      username: '',
      email: '',
      password: ''
  });

  const createAccount=()=>{
      axios.post('http://localhost:5000/users',user).then(()=>{
          window.location.reload(false);
      }) 
  }

  const detailsValidation=()=>{
      axios.get('http://localhost:5000/users').then((res)=>{
        
        const data=res.data;
        //const [posts]=[];
        posts.setState({post:data});
        
        //if(!posts.length) return alert('error')
          alert('Data has been received');
      }).catch(()=>{
        alert('Data has not been received');
      })
        
    }
  
    return (
      <Box sx={{ width: '45%' }}>
        <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Log In" {...a11yProps(0)} />
            <Tab label="Create Account" {...a11yProps(1)} />
            
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <TextField required id="filled-basic" label="Username" variant="filled" />
            <TextField required type="password" id="filled-basic" label="Password" variant="filled" />
            
            <Button variant="contained"  onClick={detailsValidation}>Log In</Button>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField required id="standard-basic" label="Username" variant="standard" value={user.username} onChange={(event) => 
          {setUserDets({...user,username: event.target.value})}}/>
          <TextField required id="standard-basic" label="E-mail" variant="standard" value={user.email} onChange={(event) => 
          {setUserDets({...user,email: event.target.value})}} />
          <TextField required type="password" id="standard-basic" label="Password" variant="standard" value={user.password} onChange={(event) => 
          {setUserDets({...user,password: event.target.value})}}/>
          <TextField required type="password" id="standard-basic" label="Retype Password" variant="standard" />
          <Button variant="contained" disabled={!user.username, !user.email, !user.password}  onClick={createAccount}>Create Account</Button>
          
        </TabPanel>
        
      </Box>
    );
  }