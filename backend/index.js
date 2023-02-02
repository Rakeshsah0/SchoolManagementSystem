import express from "express";
import studentRoute from './routes/students.js'
import teacherRoute from './routes/teachers.js'
var app=express()

app.get('/',(req,res)=>{
    res.send("Hello from express")
})

app.use('/students',studentRoute)
app.use('/teachers',teacherRoute)

const PORT=5000
app.listen(PORT,()=>{
    console.log("Backend running on port 5000")
})