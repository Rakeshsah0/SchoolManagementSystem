

export const fetchStudents=(req,res)=>{
    res.send("Hello from students fetch all")
}

export const fetchStudent=(req,res)=>{
    res.send(`Hello from student with id ${req.params.id}`)
}

export const createStudent=(req,res)=>{
    res.send(`Hello from create Student with detail ${[...req.body]}`)
}