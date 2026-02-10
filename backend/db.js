import mysql from "mysql2/promise"
var db=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
      database:"CRUD"
})

export default db;