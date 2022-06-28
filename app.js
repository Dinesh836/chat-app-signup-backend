//dependencies
const express=require('express')
const path=require('path')
const cors=require('cors')
const bcrypt=require('bcrypt');
const sequelize=require('./utils/database');



//dataabse tables 
const user = require('./models/user');


//routes dependencies
const userRoute=require('./routes/user')

const app=express()
app.use(cors())

app.use(express.json());

//routes
app.use('/user', userRoute)

sequelize.sync()
.then(() => {
    app.listen( 4000)
console.log(`table created`);
}).catch((err) => {
    console.log(`Error `,err);
})


