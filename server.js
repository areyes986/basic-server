'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

// app.get('/', (request, response) => {
//     response.send('Hello, first one');
// });

app.get('/hello', (request, response) => {
    response.send('Hello from the new route Hello!!!');
})

app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));