import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import {NavLink} from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

export default function apple11prodescription(){
    return(
        <div>
            <img src={'/static/images/buttons/iphone11pro.jpg'} width="40%" ></img>
            <div>
            <Container>
                <Grid >
                <h2>Apple Iphone 11 Pro</h2>
                <div>
                <h10>Description...</h10>
                </div>
                <h10>Price - £</h10>
                <div>   
                <Button color="inherit"><NavLink  color="inherit" to="/purchase">Purchase</NavLink></Button>
                </div> 
                </Grid>
            </Container>  
            </div>
        </div>
    );
}