import express from 'express'
import { getLeaves, getLeaveById, createLeave, updateLeave, deleteLeave, setLeaveStatus } from '../controllers/LeaveController.js'

const router = express.Router()

router.get('/leaves', getLeaves)
router.get('/leaves/:id', getLeaveById)
router.post('/leaves', createLeave)
router.patch('/leaves/:id', updateLeave)
router.delete('/leaves/:id', deleteLeave)
router.patch('/leaves/:id/set-leave-status', setLeaveStatus)

export default router