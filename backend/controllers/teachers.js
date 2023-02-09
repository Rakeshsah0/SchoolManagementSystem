import mysql from "mysql2"

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Xenon@6590",
    database:"school"
})

export const fetchTeachers=(req,res)=>{
    
    const fetchSTudents="select teacher_id,full_name,designation,highest_qualification,photo from teachers;"
    db.query(fetchSTudents,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const fetchTeacher=(req,res)=>{
    const teacher_id=req.params.teacher_id
    const fetchStudent=`select teacher_id,full_name,designation,highest_qualification,photo from teachers where teacher_id=${teacher_id}`
    db.query(fetchStudent,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const createTeacher=(req,res)=>{
    res.send(`Hello from create teacher with detail ${[...req.body]}`)
}