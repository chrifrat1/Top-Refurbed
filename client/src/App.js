import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from  '@material-ui/core';
import ShowCatalogue from './components/showProduct/showProduct.js';
import MenuBar from './components/appBar/appBar.js';
import LogIn from './components/logincreateAccForm/logincreateAccForm.js';
import S21 from './components/showDescriptions/s21description.js';
import IP11Pro from './components/showDescriptions/apple11prodescription.js';
import P20 from './components/showDescriptions/p20description.js';
import Zfold from './components/showDescriptions/zfold2description.js'
import IPad from './components/showDescriptions/ipadprodescription.js'
import Pixel from './components/showDescriptions/pixeldescription.js'
import Purchase from './components/buyProduct/buyProduct.js'
import Confirmation from './components/orderConfirmation/orderConfirmation.js'
import AdminLogin from './components/adminSection/adminLogin.js'
import AdminMenu from './components/adminSection/adminSection.js'
import OrderHistory from './components/adminSection/orderHistory.js'
import RefundForm from './components/Refund/refund.js'
import RefundConfirmation from './components/Refund/refundSubmitted.js'
import RefundRequests from './components/adminSection/showRefundReq.js'

//import CreateAccount from './components/createAccount/createAccount.js'
import NavBar from './NavBar.js';



import './App.css';
import useStyles from './styles.js'
import { mergeClasses } from '@material-ui/styles';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const classes=useStyles();
  return (
    <Router>
    <div className="App">
      <Container maxWidth="lg">
          <AppBar className={classes.AppBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center"> T

            </Typography>
          </AppBar>
        <Grow in>
          
        <Container>
        <Grow in>
          <Grid container spacing={2}>
            <Grid container  item spacing={1}>
              <MenuBar />
            </Grid>
          <Switch>
            
            <Route exact path="/">
              <Grid container item spacing={1}>
                <ShowCatalogue />
              </Grid>
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route> 
            <Route exact path="/samsungs21">
              <S21 />
            </Route>  
            <Route exact path="/apple11pro">
              <IP11Pro />
            </Route>
            <Route exact path="/huaweip20">
              <P20 />
            </Route>
            <Route exact path="/zfold2">
              <Zfold />
            </Route>
            <Route exact path="/ipadpro">
              <IPad />
            </Route>
            <Route exact path="/pixel6">
              <Pixel />
            </Route>
            <Route exact path="/purchase">
              <Purchase />
            </Route>
            <Route exact path="/orderConf">
              <Confirmation />
            </Route>
            <Route exact path="/adminlogin">
              <AdminLogin />
            </Route>
            <Route exact path="/adminMenu">
              <AdminMenu />
            </Route>
            <Route exact path="/orderHistory">
              <OrderHistory />
            </Route>
            <Route exact path="/refund">
              <RefundForm />
            </Route>
            <Route exact path="/requestSubmitted">
              <RefundConfirmation />
            </Route>
            <Route exact path="/refundRequests">
              <RefundRequests />
            </Route>
            
          </Switch>    
          
          
           </Grid>
           
          
        </Grow>   
            
        </Container>
        
        </Grow>
      </Container>
      
    </div>
  </Router>  
  );
}

export default App;