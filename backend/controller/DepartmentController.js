import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getDepartments = async (req, res) => {
    try {
        const response = await prisma.department.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getDepartmentById = async (req, res) => {
    try {
        const response = await prisma.department.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createDepartment = async (req, res) => {
    const { name, price } = req.body
    try {
        const department = await prisma.department.create({
            data: {
                name: name,
                price: price,
            },
        })
        res.status(201).json(department)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateDepartment = async (req, res) => {
    const { name, price } = req.body
    try {
        const department = await prisma.department.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: name,
                price: price,
            },
        })
        res.status(200).json(department)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteDepartment = async (req, res) => {
    try {
        const department = await prisma.department.delete({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(department)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
