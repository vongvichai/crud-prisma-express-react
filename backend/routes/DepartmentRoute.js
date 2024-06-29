import express from 'express'
import { getDepartments, getDepartmentById, createDepartment, updateDepartment, deleteDepartment } from '../controller/DepartmentController.js'

const router = express.Router()

router.get('/departments', getDepartments)
router.get('/departments/:id', getDepartmentById)
router.post('/departments', createDepartment)
router.patch('/departments/:id', updateDepartment)
router.delete('/departments/:id', deleteDepartment)

export default router
