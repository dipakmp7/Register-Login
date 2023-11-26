const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'manager',
    database : 'LoginRegister'
})

const app = express()
app.use(cors())
app.use(express.json())

app.post("/signup",(req,res)=>{
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    const query = "insert into login (`name`,`email`,`password`) values (?)"

    db.query(query,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})


app.listen(2023,()=>{
    console.log("server listening on 2023")
})