const express=require('express');
const fs=require('fs');
const bodyparse=require('body-parser')
const router=express.Router();
router.use(bodyparse.urlencoded({extended:false}));

router.get('/login',(req,res,next)=>{
     return res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login"  method="POST">
    <input type="text" id="username" placeholder="username" name="title">
    <button type ="submit">send</button
    </form>`);    
});
router.post('/login',(req,res,next)=>{

    fs.writeFile("mesage.txt",`${req.body.username}:${req.body.message}`,{falg:'a'},(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/');
    });
});


module.exports=router;