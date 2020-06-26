const express = require("express");
const loginrouter = express.Router();
const Logindata = require('../model/Logindata');
const Userdata = require('../model/Userdata');

function loginRouters(nav){
    var login=[
        {
            type:'input',
            label:'USERNAME:',
            input:'text',
            value:'username'
        },
        {
            type:'input',
            label:'PASSWORD:',
            input:'password',
            value:'password'
    
        },
        {
            type:'input',
            input:'submit',
            value:'LOGIN',
            login:'LOGIN'
            
        }
    ];
    loginrouter.get('/',(req,res)=>{
        res.render('login',{
            nav,
            title:'login',
            login
        })
    });
    loginrouter.post('/valid',(req,res)=>{
        var ld = {
            username : req.body.username,
            password : req.body.password
        }
        var login=Logindata(ld);
        Userdata.findOne({username:login.username,password:login.password},function(err,users){
            if (err){
                console.log(err);
                return res.status(500).send();
            }
            if(!users){
                
                return res.status(404).send("please login with a valid username and password else signup");
            };
           
            res.redirect('/');
        })
        

    });
    return loginrouter;
    
}
module.exports=loginRouters;