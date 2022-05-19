const express = require('express');
const connectDB = require('./config/db');
const path = require("path");
var cors = require('cors');
// routes
const articles = require('./routes/api/article')

const app = express();

connectDB();

// cors
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use(express.json());

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