import mysql from "mysql"

const db=mysql.createPool({
    host:"sql12.freesqldatabase.com",
    user:"sql12595754",
    password:"uMP5JXuRjC",
    database:"sql12595754"
})

export const fetchStudents=(req,res)=>{
    const fetchSTudents="select * from Students;"
    db.query(fetchSTudents,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const fetchStudent=(req,res)=>{
    const id=req.params.id
    const fetchStudent=`select * from Students where student_id=${id}`
    db.query(fetchStudent,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const createStudent=(req,res)=>{
    res.send(`Hello from create Student with detail ${[...req.body]}`)
}