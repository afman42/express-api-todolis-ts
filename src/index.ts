import { AppDataSource } from "./data-source"
import { Application } from 'express'
import express from 'express'
import morgan from 'morgan'
import { ActivityGroupsRouter, TodoItemsRouter } from "./router"

const app: Application = express();
const PORT = 3030;

app.use(express.json())
app.use(morgan('dev'))

app.use('/activity-groups',ActivityGroupsRouter)
app.use('/todo-items',TodoItemsRouter)

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`)

  try {
    AppDataSource.initialize();
    console.log('Database connected!')
  } catch (err) {
    console.log(err)
  }
})
