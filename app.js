//----------------------------------------------------------------
// SETUP
//----------------------------------------------------------------
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.API_PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*' })); //this is required for the contentful webhooks



app.use(cors());

app.get('/users', (req, res) => {
    res.json([
        {
            name: 'Vasya', 
            age: 23,
        },
        {
            name: 'Masha', 
            age: 22,
        }
    ]);
})

app.listen(PORT, () => console.log(`Server listen port ${PORT}`));

module.exports = app;
