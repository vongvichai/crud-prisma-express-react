import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ProductRoute from './routes/ProductRoute.js'
import UserRoute from './routes/UserRoute.js'
import EmployeeRoute from './routes/EmployeeRoute.js'
import DepartmentRoute from './routes/DepartmentRoute.js'
import LeaveRoute from './routes/LeaveRoute.js'
import LeaveLineRoute from './routes/LeaveLineRoute.js'
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 5000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) =>
{
    res.send('Hello World!')
})
app.use(ProductRoute)
app.use(UserRoute)
app.use(EmployeeRoute)
app.use(DepartmentRoute)
app.use(LeaveRoute)
app.use(LeaveLineRoute)

app.listen(port, () =>
{
    console.log(`Server listening on port ${port}`)
})

export default app
