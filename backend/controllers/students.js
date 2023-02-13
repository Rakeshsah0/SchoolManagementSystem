import mysql from "mysql2"

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Xenon@6590",
    database:"school"
})

export const fetchStudents=(req,res)=>{
    const fetchSTudents="select * from students;"
    db.query(fetchSTudents,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const fetchStudent=(req,res)=>{
    const student_id=req.params.student_id
    const fetchStudent=`select * from Students where student_id=${student_id}`
    db.query(fetchStudent,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

