const express=require('express');
const router=express.Router();
const fs=require('fs');
const bodyparser=require('body-parser');
router.use(bodyparser.urlencoded({ extended: false }));

router.get('/',(req,res)=>{
    fs.readFile("mesage.txt",(err,data)=>{
        if(err){
            console.log(err)
            data="no chat exist";
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
    <input type="text" placeholder="entertext" name="message" id="message">
    <input type="hidden" id="username" name="username">
    <button type ="submit">add text</button>
    </form>`);

    });
});
router.post('/',(req,res)=>{

    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("mesage.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/');
    });

});
module.exports=router;