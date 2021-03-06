const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();

app.use(express.json({extended:false}));
app.get('/',(req,res)=>res.send('API Running'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/profile/form',require('./routes/api/form'));
app.use('/form/cities',require('./routes/api/cities'));
app.listen(5000,()=>console.log(`working`));