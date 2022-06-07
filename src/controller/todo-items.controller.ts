import { Request, Response } from "express"
import { Todo } from "../entity/Todo"
import { priorityEnum } from "../enums"
import { TodoRepository } from "../repository/todo.repository"

export class todoItemsController {
    constructor(
        private todoRepository: TodoRepository
    ) { }

    async getAll(req: Request, res: Response) {
        let { activity_group_id } = req.query
        let model = await this.todoRepository.find()
        if (activity_group_id != null) {
            model = await this.todoRepository.findActivity(activity_group_id)
        }
        return res.json({
            status: 'Success',
            message: "Success",
            data: model
        })
    }

    async getOne(req: Request, res: Response) {
        const { id } = req.params
        let model = await this.todoRepository.findOne(parseInt(id))
        if (!model) {
            return res.status(404).json({
                status: "Not Found",
                message: `Todo with ID ${id} Not Found`,
                data: {}
            })
        }
        return res.json({
            status: "Success",
            message: "Success",
            data: model
        })
    }

    async create(req: Request, res: Response) {
        let { activity_group_id, title } = req.body
        if (title == undefined || title == "") {
            return res.status(400).json({
                status: "Bad Request",
                message: "title cannot be null",
                data: {}
            })
        }
        if (activity_group_id == undefined || activity_group_id == "") {
            return res.status(400).json({
                status: "Bad Request",
                message: "activity_group_id cannot be null",
                data: {}
            })
        }
        const todo = new Todo()
        todo.activityGroupId = activity_group_id
        todo.title = title
        todo.deletedAt = null
        todo.isActive = true
        todo.priority = priorityEnum.VERY_HIGH
        // let save = await todo.save()
        let save = await this.todoRepository.add(todo)
        if (!save) {
            return res.status(400).json({
                status: "Bad Request",
                message: "Failed to save",
                data: {}
            })
        }
        return res.status(201).json({
            status: 'Success',
            message: 'Success',
            data: todo
        })
    }

    async update(req: Request, res: Response) {
        let { id } = req.params
        let { title, priority, is_active } = req.body
        let model = await this.todoRepository.findOne(parseInt(id))
        if (!model) {
            return res.status(404).json({
                status: "Not Found",
                message: `Todo with ID ${id} Not Found`,
                data: {}
            })
        }
        model.title = title
        model.isActive = is_active
        model.priority = priority

        let save = await this.todoRepository.add(model)
        if (!save) {
            return res.status(400).json({
                status: "Bad Request",
                message: "Failed to save",
                data: {}
            })
        }
        return res.json({
            status: "Success",
            message: "Success",
            data: model
        })

    }

    async delete(req: Request, res: Response) {
        let { id } = req.params
        let model = await this.todoRepository.findOne(parseInt(id))
        if (!model) {
            return res.status(404).json({
                status: "Not Found",
                message: `Todo with ID ${id} Not Found`,
                data: {}
            })
        }
        await this.todoRepository.delete(model.id)
        return res.json({
            status: "Success",
            message: "Success",
            data: {}
        })
    }
}
