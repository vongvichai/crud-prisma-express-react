import express from 'express'
import { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../controllers/EmployeeController.js'

const router = express.Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployeeById)
router.post('/employees', createEmployee)
router.patch('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)

export default router
