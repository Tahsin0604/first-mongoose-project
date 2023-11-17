import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

//this will call controller function
router.post('/create-student', StudentController.createStudent);

router.get('/get-all-students', StudentController.getAllStudents);

router.get('/:id', StudentController.getSingleStudent);
export const studentRoutes = router;
