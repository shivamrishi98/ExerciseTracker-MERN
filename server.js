const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/users', userRouter)
app.use('/exercises',exerciseRouter)

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database successfully connected');
})

if (process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})