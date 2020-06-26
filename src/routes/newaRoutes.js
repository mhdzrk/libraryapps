express = require("express");
const newarouter = express.Router();
const Authordata = require('../model/Authordata');


function newarouters(nav){

    newarouter.get('/',(req,res)=>{
        res.render('newauthor',{
            nav,
            title:'add a new author'
        })
    })

    newarouter.get('/adds',(req,res)=>{
        var ad= {
            name : req.query.name,
            work : req.query.work,
            genre : req.query.genre,
            image : req.query.image
        }
        var author = Authordata(ad);
        author.save();
        res.redirect("/authors");
       
        

    });


    return newarouter;
}

module.exports=newarouters;