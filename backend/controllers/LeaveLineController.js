import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getLeaveLines = async (req, res) =>
{
  try
  {
    const response = await prisma.LeaveLine.findMany()
    res.status(200).json(response)
  } catch (error)
  {
    res.status(500).json({ msg: error.message })
  }
}

export const getLeaveLineById = async (req, res) =>
{
  try
  {
    const response = await prisma.LeaveLine.findUnique({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error)
  {
    res.status(404).json({ msg: error.message })
  }
}

export const createLeaveLine = async (req, res) =>
{
  const { startDate, endDate, leaveId } = req.body
  try
  {
    const leaveLine = await prisma.LeaveLine.create({
      data: {
        startDate,
        endDate,
        leave: { connection: { id: leaveId } }
      },
    })
    res.status(201).json(leaveLine)
  } catch (error)
  {
    res.status(400).json({ msg: error.message })
  }
}

export const updateLeaveLine = async (req, res) =>
{
  const { startDate, endDate, leaveId } = req.body
  try
  {
    const user = await prisma.LeaveLine.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        startDate,
        endDate,
        leave: { connection: { id: leaveId } }
      },
    })
    res.status(200).json(user)
  } catch (error)
  {
    res.status(400).json({ msg: error.message })
  }
}

export const deleteLeaveLine = async (req, res) =>
{
  try
  {
    const user = await prisma.LeaveLine.delete({
      where: {
        id: Number(req.params.id),
      },
    })
    res.status(200).json(leaveLine)
  } catch (error)
  {
    res.status(400).json({ msg: error.message })
  }
}
