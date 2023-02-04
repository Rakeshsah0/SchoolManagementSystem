import express from "express";
import {fetchStudents,fetchStudent,createStudent} from "../controllers/students.js";
const router=express.Router()

router.get('/',fetchStudents)
router.get('/:id',fetchStudent)
router.post('/createStudent',createStudent)

export default router