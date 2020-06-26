express = require("express");
const newrouter = express.Router();
const Bookdata = require('../model/Bookdata');


function newrouters(nav){

    newrouter.get('/',(req,res)=>{
        res.render('new',{
            nav,
            title:'add a new book'
        })
    })

    newrouter.get('/add',(req,res)=>{
        var item= {
            title : req.query.title,
            author : req.query.author,
            genre : req.query.genre,
            image : req.query.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect("/books");
       
        

    });


    return newrouter;
}

module.exports=newrouters;