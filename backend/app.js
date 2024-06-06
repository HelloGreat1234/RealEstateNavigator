require('dotenv').config()

const express = require('express')

const app = express();

app.use(express.json())

const mongoose = require('mongoose')

const testRoute = require('./routes/testRoute')
const authRoute = require('./routes/auth')
const propertyRoute = require('./routes/property')

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/not-found')

// app.use('/api/v1',testRoute);
app.use('/api/v1',authRoute)
app.use('/api/v1/property',propertyRoute)

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected ")
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()