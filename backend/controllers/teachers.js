

export const fetchTeachers=(req,res)=>{
    res.send("Hello from Teachers fetch all")
}

export const fetchTeacher=(req,res)=>{
    res.send(`Hello from teacher with id ${req.params.id}`)
}

export const createTeacher=(req,res)=>{
    res.send(`Hello from create teacher with detail ${[...req.body]}`)
}