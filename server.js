// here we will make an express server and serve our page
const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
app.use(express.static('public'));
app.listen(port);

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});