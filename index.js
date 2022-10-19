const express = require('express');
const app = express();

console.log('Hello world')
//GET
//localhost:3000/hey
//hey
app.get('/hey', (req,res) => {
    res.send('hey');
})

app.listen(3000, () => {
    console.log("Servidor em funcionamento...")
})