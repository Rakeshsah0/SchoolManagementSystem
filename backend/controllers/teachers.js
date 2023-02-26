import mysql from "mysql2"

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Xenon@6590",
    database:"school"
})

export const fetchTeachers=(req,res)=>{
    
    const fetchTeachers="select teacher_id,full_name,designation,highest_qualification,photo from teachers;"
    db.query(fetchTeachers,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}

export const fetchTeacher=(req,res)=>{
    const teacher_id=req.params.teacher_id
    const fetchTeacher=`select teacher_id,full_name,designation,highest_qualification,photo from teachers where teacher_id=${teacher_id}`
    db.query(fetchTeacher,(error,result)=>{
        if(error) console.log(error)
        else res.send(result)
    })
}


