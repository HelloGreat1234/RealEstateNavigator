require('dotenv').config()

const express = require('express')

const app = express();


app.use(express.json())


const start = async() => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()