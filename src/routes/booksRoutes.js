const express = require('express');
const booksrouter=express.Router();
const Bookdata = require('../model/Bookdata');
const multer = require('multer');


function router(nav){
 
booksrouter.get('/',(req,res)=>{
    Bookdata.find()
    .then(function(books){
        res.render("books",{
            title:'Books',
            nav,
            books

        });

    });
});

booksrouter.get('/:id',(req,res)=>{
    const id=req.params.id
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render("book1",{
            nav,
            title:book.title,
            book
        
            })
    });    
    
});
booksrouter.get('/:id/del',(req,res)=>{
    
    const id = req.params.id
    Bookdata.deleteOne({_id : id})
    .then(function(){
        res.redirect('/books');
    })

})

booksrouter.get('/:id/edit',(req,res)=>{
    
    const id = req.params.id
    Bookdata.findOne({_id : id})
    .then(function(book){
        res.render('editbook',{
            nav,
            title:'edit book',
            book
            
        });
    })

})
booksrouter.get('/:id/edit/ok',(req,res)=>{
    const id = req.params.id
    if(req.query.image=""){
    Bookdata.findOneAndUpdate({_id : id},{"$set":{title:req.query.title,author:req.query.author,genre:req.query.genre}})
    .then(function(book){
        book
        book.save()
        res.redirect('/books');
    
        })
    }
    else{
        Bookdata.findOneAndUpdate({_id : id},{"$set":{title:req.query.title,author:req.query.author,genre:req.query.genre}})
        .then(function(book){
        book
        book.save()
        res.redirect('/books');
    
        })
    }
    
});
return booksrouter;

}



module.exports = router;

