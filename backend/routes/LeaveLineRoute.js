import express from 'express'
import { getLeaveLines, getLeaveLineById, createLeaveLine, updateLeaveLine, deleteLeaveLine } from '../controllers/LeaveLineController.js'

const router = express.Router()

router.get('/leave-lines', getLeaveLines)
router.get('/leave-lines/:id', getLeaveLineById)
router.post('/leave-lines', createLeaveLine)
router.patch('/leave-lines/:id', updateLeaveLine)
router.delete('/leave-lines/:id', deleteLeaveLine)

export default router