require("dotenv").config();
require('./config/db.connection.js');
const express = require("express");
const peopleRouter = require('./routes/people-router.js')
const cors = require("cors")
const morgan = require("morgan")

const app = express();
const { PORT } = process.env;

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

app.use('/people', peopleRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

