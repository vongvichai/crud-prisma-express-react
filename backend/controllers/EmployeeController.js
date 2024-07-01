import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getEmployees = async (req, res) =>
{
    try
    {
        const response = await prisma.employee.findMany({
            include: { user: true ,
            department: true }
        })
        res.status(200).json(response)
    } catch (error)
    {
        res.status(500).json({ msg: error.message })
    }
}

export const getEmployeeById = async (req, res) =>
{
    try
    {
        const response = await prisma.employee.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error)
    {
        res.status(404).json({ msg: error.message })
    }
}

export const createEmployee = async (req, res) =>
{
    const { firstName, lastName, email, userId, departmentId } = req.body

    try
    {
        const employee = await prisma.employee.create({
            data: {
                firstName,
                lastName,
                email,
                user: { connect: { id: userId } },
                department: { connect: { id: departmentId } }
            },
        })
        res.status(201).json(employee)
    } catch (error)
    {
        res.status(400).json({ msg: error.message })
    }
}

export const updateEmployee = async (req, res) =>
{
    const { firstName, lastName, email, userId, departmentId } = req.body
    try
    {
        const employee = await prisma.employee.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                firstName,
                lastName,
                email,
                user: { connect: { id: userId } },
                department: { connect: { id: departmentId } }
            },
        })
        res.status(200).json(employee)
    } catch (error)
    {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteEmployee = async (req, res) =>
{
    try
    {
        const employee = await prisma.employee.delete({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(employee)
    } catch (error)
    {
        res.status(400).json({ msg: error.message })
    }
}
