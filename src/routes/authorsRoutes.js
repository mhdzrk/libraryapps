const express = require('express');
const authorsrouter=express.Router();
const Authordata = require('../model/Authordata');

function routers(nav){
    authorsrouter.get('/',(req,res)=>{
        Authordata.find()
        .then(function(authors){
            res.render('authors',{
                nav,
                title:'Authors',
                authors
        
            }) ;
        })
    

})

authorsrouter.get('/:id',(req,res)=>{
    const id =req.params.id;
    Authordata.findOne({_id : id})
    .then((author)=>{
        res.render('author1',{
            nav,
            author
    
        })

    })
   
})
authorsrouter.get('/:id/del',(req,res)=>{
    
    const id = req.params.id
    Authordata.deleteOne({_id : id})
    .then(function(){
        res.redirect('/authors');
    })

})
authorsrouter.get('/:id/edit',(req,res)=>{
    
    const id = req.params.id
    Authordata.findOne({_id : id})
    .then(function(author){
        res.render('editauthor',{
            nav,
            title:'edit author',
            author
            
        });
    })

})
authorsrouter.get('/:id/edit/ok',(req,res)=>{
    const id = req.params.id
    if(req.query.image=""){
    Authordata.findOneAndUpdate({_id : id},{"$set":{name:req.query.name,work:req.query.work,genre:req.query.genre}})
    .then(function(author){
        author
        author.save()
        res.redirect('/authors');
    
        })
    }
    else{
        Authordata.findOneAndUpdate({_id : id},{"$set":{name:req.query.name,work:req.query.work,genre:req.query.genre}})
        .then(function(author){
        author
        author.save()
        res.redirect('/authors');
    
        })
    }
    
});

    return authorsrouter;
}

module.exports=routers;