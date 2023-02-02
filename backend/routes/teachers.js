import express from "express";
import {fetchTeachers,fetchTeacher,createTeacher} from "../controllers/teachers.js";
const router=express.Router()

router.get('/',fetchTeachers)
router.get('/:id',fetchTeacher)
router.post('/createStudent',createTeacher)

export default router