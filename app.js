const express=require('express');
//const bodyparser=require('body-parser');
const app=express();
//app.use(bodyparser.urlencoded({ extended: false }));
const loginroute=require('./routers/login');
const loginagain=require('./routers/loginag1');
app.use(loginroute);
app.use(loginagain);



app.listen(2000);