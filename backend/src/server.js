const express = require("express");
const routes = require("./routes.js")
const mongoose = require("mongoose");

const app = express();
mongoose.connect('mongodb+srv://ggv:ggvdatabase@ggvapi.xynk9gm.mongodb.net/ggvDB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});




app.use(express.json());
app.use(routes);

// add

// remove


// list




app.listen(3333);


