require('dotenv').config()

const express = require('express')

const app = express();

app.use(express.json())

const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const mongoose = require('mongoose')

const testRoute = require('./routes/testRoute')
const authRoute = require('./routes/auth')
const propertyRoute = require('./routes/property')

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/not-found')

app.use('/uploads',express.static('uploads'))

// app.use('/api/v1',testRoute);
app.use('/api/v1',authRoute)
app.use('/api/v1/property',propertyRoute)

app.use(notFound)
app.use(errorHandler)



app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

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