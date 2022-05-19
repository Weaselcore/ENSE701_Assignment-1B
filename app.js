
const express = require('express');
const connectDB = require('./config/db');
//var cors = require('cors');
// routes
const articles = require('./routes/api/article')

const app = express();

connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/api/articles', articles);

const port = process.env.PORT || 8082;

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('_____'));
// }

app.listen(port, () => console.log(`Server running on port ${port}`));