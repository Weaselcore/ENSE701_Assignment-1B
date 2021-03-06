const express = require('express');
const connectDB = require('./config/db');
const path = require("path");
var cors = require('cors');
const bodyParser = require('body-parser');
// require('dotenv').config();

// routes
const articles = require('./routes/api/article')

const app = express();
connectDB();

// cors
app.use(cors());

// Init Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/articles', articles);

const port = process.env.PORT || 8082;

// Step 1:
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('_____'));
}

app.listen(port, () => console.log(`Server running on port ${port}`));