import db from "./db.js";
import express from "express"
import cors from "cors"
var app=express();
app.use(express.json())
app.use(express.urlencoded({encoded:true}))
app.use(cors());
app.post("/submit",async(req,res)=>{
    const {name,sirname,email}=req.body;
   var result =await db.query("insert into users (name,sirname,email) values (?,?,?)",[name,sirname,email])
    res.status(200).json({response:true,result})
})

app.put("/update/:id",async(req,res)=>{
   var id=req.params.id;
   const {name,sirname,email}=req.body;
   var [result]=await db.query("update users set name=?,sirname=?,email=? where id=?",[name,sirname,email,id])
    res.status(200).json({response:true,result})
})

app.delete("/delete/:id",async(req,res)=>{
   var id=req.params.id;
   var [result]=await db.query("delete from users  where id=?",[id])
    res.status(200).json({response:true,result})
})
app.get("/get",async(req,res)=>{
   var [result] =await db.query("select *from users");
    res.status(200).json({response:true,result})
})


app.listen(5000,()=>{console.log("start")})