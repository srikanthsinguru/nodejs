const express = require('express');
//express exp
const exp = express();
//register view engines
exp.set('view engine' ,'ejs');
//listen for resquets
exp.listen(3000);
exp.get('/',(req,res)=>{
    const blogs = [
        {title: 'QA' , snippet:'Quality Analyst'},
        {title: 'STACK' , snippet:'MERN Stack Developing'},
        {title: 'YODIZ' , snippet:'Testing tool'},
    ];
res.render('index',{title : 'Home'});
});
exp.get('/about',(req,res)=>{
    res.render('about' ,{title : 'About'});
 });
 //Redirects
 exp.get('/blogs/create',(req,res)=>{
     res.render('create' ,{title : 'Create New Blog'});
 });
 //404 page
 exp.use((req,res)=>{
     res.status(404).render('404' ,{title : '404 Error '});
 });
