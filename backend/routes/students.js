import express from "express";
import {fetchStudents,fetchStudent,createStudent} from "../controllers/students.js";
const router=express.Router()

router.get('/',fetchStudents)
router.get('/:student_id',fetchStudent)
router.post('/createStudent',createStudent)

export default router