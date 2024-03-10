const dotenv = require("dotenv");
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.get('/', (res, req) => {
    res.json({msg: "Hello"})
})


dotenv.config();

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        //useCreateIndex: true,
        //useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
  
  connectToDatabase();


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port', port)
})