const express = require('express');
const path = require('path');
const app = express();

//builtin middleware

app.use(express.static('public'))

app.get('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.listen(4000);