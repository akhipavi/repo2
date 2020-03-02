const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const names =[
    {id:1,name:'Akhil'},
    {id:2,name:'Chari'},
    {id:3,name:'Pallavi'}
];

app.get('/',(req,res)=>{
    res.send('Hello express frame work...');
});

app.get('/api/names',(req,res)=>{
    res.send(names);
});
app.post('/api/names',(req,res)=>{
    const schema = {
        
        name: Joi.string().min(3).required()
    };
     const valid = Joi.validate(req.body.name,schema,(err,data)=>{
        if(err){
            res.send(data);
            
        }else{
            res.send(data);
        }

    });
    console.log(valid);

    if(!req.body.name){
        // bad request code warning
        res.status(400).send('The name should be more than 3 characters');
        
    }
    const name ={
        id:names.length +1,
        name:req.body.name
    };
    names.push(name);
    res.send(name);

});

app.get('/api/Add/:num1/:num2',(req,res)=>{
    var sum1 =Number(req.params.num1) + Number(req.params.num2);
    var result =sum1.toString();
          res.send("The sum of two numbers you posted is:"+result);
});
app.get('/api/calender/:year/:month/:day',(req,res)=>{
    res.send(req.params);
});
app.get('/api/names/:id',(req,res)=>{
    const name = names.find(c=>c.id === parseInt(req.params.id));
    if(! name) 
        res.status(404).send('The name with this id is not found..!!!');
        res.send(name);
});



const port = process.env.PORT ||3000;
app.listen(port,() =>
console.log(`node is listening on port ${port} with the given request`)
);
