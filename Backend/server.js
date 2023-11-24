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
