const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const server=express();

server.use(cors());
server.use(bodyParser.json());
server.listen(6300,()=>{
    console.log('Server is running on port 6300');
});