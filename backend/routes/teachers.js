import express from "express";
import {fetchTeachers,fetchTeacher} from "../controllers/teachers.js";
const router=express.Router()

router.get('/',fetchTeachers)
router.get('/:teacher_id',fetchTeacher)


export default router