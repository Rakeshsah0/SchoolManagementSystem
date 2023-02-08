import mysql from "mysql2"

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Xenon@6590",
    database:"school"
})

export const fetchTeachers=(req,res)=>{
    
    const fetchSTudents="select * from teachers;"
    db.query(fetchSTudents,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const fetchTeacher=(req,res)=>{
    res.send(`Hello from teacher with id ${req.params.id}`)
}

export const createTeacher=(req,res)=>{
    res.send(`Hello from create teacher with detail ${[...req.body]}`)
}