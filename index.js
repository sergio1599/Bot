var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
const APP_TOKEN = 'EAADhtwcZB994BAMATstFJ9kZC62bDTZChi9LGZC0161hZCZCdBFk08OXQqO91YZBsgDWQRByMDQxPVfARap00F5XZCZBCMbZBNV5H' +
                         'b9clzEA9P1t6IHKL5DKqcEMG4v8WZBrMA1MPmmQVFTG3HFtyfbe6LCE3Hdn7v4il3PW136PZAZBOZAwZDZD';

var app= express();
app.use(bodyParser.json());

app.listen(3000, function (){
    console.log("El servidor se encuentra en el puerto 3000")
});

app.get('/',function (req,res){
    res.send('Bienvenido')
});

app.get('/webhook',function (req,res){
    if (req.query['hub.verify_token']=== 'test_token_say_hello'){
        res.send(req.query['hub.challenge']);
    }else {
        res.send('No tienes que entrar aquí')
    }
});