import express from 'express'
import { getLeaves, getLeaveById, createLeave, updateLeave, deleteLeave } from '../controllers/LeaveController.js'

const router = express.Router()

router.get('/leaves', getLeaves)
router.get('/leaves/:id', getLeaveById)
router.post('/leaves', createLeave)
router.patch('/leaves/:id', updateLeave)
router.delete('/leaves/:id', deleteLeave)

export default router