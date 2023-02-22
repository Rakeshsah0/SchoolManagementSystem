import express from "express";
import {fetchStudents,fetchStudent} from "../controllers/students.js";
const router=express.Router()

router.get('/',fetchStudents)
router.get('/:student_id',fetchStudent)

export default router