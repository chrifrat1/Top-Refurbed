import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './routes/routes.js'
import DetsRoutes from './routes/details.js'
import Admin from './routes/admin.js'
import Refund from './routes/refund.js'

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/users',Routes);
app.use('/orderHistory',DetsRoutes);
app.use('/admin',Admin);
app.use('/refunds',Refund);

const CONNECTION_URL ='mongodb+srv://christian:Password0@cluster0.cjkph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT =process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(() => app.listen(PORT,() => console.log('Connection is established and running on port: '+PORT))).catch((err) => console.log(err.message));