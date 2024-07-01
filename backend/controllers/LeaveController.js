import { leaveType, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getLeaves = async (req, res) =>
{
  try
  {
    const response = await prisma.leave.findMany({
      include: {
        leaveLines: true
      }
    })
    res.status(200).json(response)
  } catch (error)
  {
    res.status(500).json({ msg: error.message })
  }
}

export const getLeaveById = async (req, res) =>
{
  try
  {
    const response = await prisma.leave.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        leaveLines: true
      }
    })
    res.status(200).json(response)
  } catch (error)
  {
    res.status(404).json({ msg: error.message })
  }
}

export const createLeave = async (req, res) =>
{
  const { docNumber, docDate, employeeId, leaveType, remarks, leaveLines } = req.body
  try
  {
    const _lines = leaveLines.map(line =>
    {
      line.startDate = new Date(line.startDate);
      line.endDate = new Date(line.endDate);
      return line;
    });
    const leave = await prisma.leave.create({
      data: {
        docNumber,
        docDate: new Date(docDate),
        employee: { connect: { id: employeeId } },
        leaveType,
        remarks,
        leaveLines: {
          create: _lines
        }
      },
      include: { leaveLines: true }
    })
    res.status(201).json(leave)
  } catch (error)
  {
    res.status(400).json({ msg: error.message })
  }
}

export const updateLeave = async (req, res) =>
{
  const { docNumber, docDate, employeeId, leaveType, remarks, leaveLines } = req.body
  try
  {
    const _lines = leaveLines.map(line =>
    {
      line.startDate = new Date(line.startDate);
      line.endDate = new Date(line.endDate);
      return line;
    });
    const leave = await prisma.leave.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        docNumber,
        docDate: new Date(docDate),
        employee: { connect: { id: employeeId } },
        leaveType,
        remarks
      },
      include: { leaveLines: true }
    });
    _lines.map(async line =>
    {
      if (line.id)
      {
        await prisma.leaveLine.update({
          where: { id: line.id },
          data: line
        });
      } else
      {
        await prisma.leaveLine.create({
          data: {
            ...line, leave: { connect: { id: leave.id } }
          }
        })
      }
    });
    res.status(200).json(leave)
  } catch (error)
  {
    res.status(400).json({ msg: error.message })
  }
}

export const deleteLeave = async (req, res) =>
{
  try
  {
    const leave = await prisma.leave.delete({
      where: {
        id: Number(req.params.id),
      },
    })
    res.status(200).json(leave)
  } catch (error)
  {
    res.status(400).json({ msg: error.message })
  }
}
