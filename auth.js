const mysql = require("mysql")
const jwt = require('jsonwebtoken')
const bcrypy = require('bcryptjs')



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_user,
    password: process.env.DATABASE_password,
    database: process.env.DATABASE
  });


exports.register = (req,res)=>{
    console.log(req.body)
    const {email, password} = req.body

    db.query('SELECT email FROM Users WHERE email = ?',[email],(error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length > 0 ){
            return res.render('index')
        }

db.query('INSERT INTO Users SET ?', {email:email,password:password},(error,results)=>{
   if(error){
    console.log(error)
   }else{
    console.log(results)
    
   }
})

    })


    res.send('goooododddoodd')
}
