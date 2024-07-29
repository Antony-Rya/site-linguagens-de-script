const http = require('http');
const moment = require('moment')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res)=> {
    res.send('Oi, API')
});

app.listen(port, ()=>{
    console.log('Servifor rodando em http://localhost:${port}')

})

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type' , 'text/plain');

//     // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//     res.end('Oi mundo! \n');
// });
// const content = 'Aula de Linguagens de Script...'
// fs.writeFile('example.txt', content, (err, data)=>{
//     if(err) throw err;
//     console.log(data)
// })


// fs.readFile('example.txt', 'utf8', (err, data)=> {
//     if(err) throw err;
//     console.log(data)
// })


