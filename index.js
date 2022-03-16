var express = require("express")
var bodyParser=require('body-parser')
var log = require('log');
require("log-node")();

app = express();
// we set the port programmatically, in case we need to change it later
var port = 3000;
//this is where we are going to getch our html from
var root = '/public'

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//tell express to use the static middleware,
app.use(express.static(__dirname + root));

app.get("/test",function(request,response){
    var param=request.query.username
    console.log('Get requested by '+param)
    response.send('Thank you for requesting our Get Service')
})

app.post('/test',function(request,response){
    console.log(request.body)
    var data=request.body;
    console.log('Post requested, here is the data :'+data)
    response.send('Thank you for requesting our Post Service')
});

app.post('/calculator', (req, res) => {
    let data = req.body;
    console.log(req)
    let n1 = parseInt(data.number1);
    let n2 = parseInt(req.body.number2);
    let operator = req.body.operator;

    let result;
    switch(operator){
        case "+":
            result = n1 + n2;
            break;
        
        case "-":
            result = n1 - n2;
            break;
        
        case "*":
            result = n1 * n2;
            break;
        
        case "/":
            result = n1 / n2;
            break;
        
        default: 
            result = null;
            break;
    }   

    if (result == null){
        res.status(400).send({error: "Incorrect calculator operator."});
    } else {
        res.status(200).send({answer: result});
    }

    
});

log.info("some info message %s", "injected string");


//start the app and listen to the port
app.listen(port);
console.log("Listening on port ", port);
