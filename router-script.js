const express = require('express');
require('dotenv').config()
require('./db/connect')
const app = express();

const people = require('./routes/people-controller');
const auth = require('./routes/auth');
const connectDB = require('./db/connect')

// Statioc Assests
app.use(express.static('./public'))
// Parse Form Data
app.use(express.urlencoded({extended: false}))
// Parse JSON Data
app.use(express.json())
// Routes/Router
app.use('/api/tasks', people);
app.use('/login', auth);


const initServer = async () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(9000, () => {
            console.log('server listening on port 7000')
        })
    } catch (err) {
        console.log(err)
    }
}

initServer()