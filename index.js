const express = require('express');
const server = express();
const mongoose = require('mongoose');

const url = 'mongodb+srv://sameersuroshe50:Gv8t3jbAxmpNxgLM@cluster0.0qgete4.mongodb.net/fullstackdb?retryWrites=true&w=majority';


mongoose.connect(url).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})

server.use(express.json());

server.get('/get', (req, res)=>{
    console.log("hello");
    res.sendStatus(200);
})

server.post('/post', (req, res)=>{
    console.log(req.body);
    res.sendStatus(200);
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
});

