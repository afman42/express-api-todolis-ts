import { Request, Response } from "express";
import { ActivityRepository } from "../repository/activity.repository";
import { Activity } from "../entity/Activity";

export class activityGroupsController {

    constructor(
        private activityRepository: ActivityRepository
    ){}

    async getAll(req: Request, res: Response) {
        let model = await this.activityRepository.find()
        return res.json({
            status: 'Success',
            message: "Success",
            data: model
        })
    }

    async getOne(req: Request, res: Response) {
        const { id } = req.params
        let model = await this.activityRepository.findOne(parseInt(id))

        if (!model) {
            return res.status(404).json({
                status: "Not Found",
                message: `Activity with ID ${id} Not Found`,
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
        let { email, title } = req.body
        if (title == undefined || title == "") {
            return res.status(400).json({
                status: "Bad Request",
                message: "title cannot be null",
                data: {}
            })
        }
        const activity = new Activity()
        activity.email = email
        activity.title = title
        activity.deletedAt = null
        let save = await this.activityRepository.add(activity)
        if (!save) {
            return res.status(400).json({
                status: "Bad Request",
                message: "Error",
                data: {}
            })
        }
        return res.status(201).json({
            status: 'Success',
            message: 'Success',
            data: activity
        })
    }

    async update(req: Request, res: Response) {
        let { id } = req.params
        let { title } = req.body
        let model = await this.activityRepository.findOne(parseInt(id))
        if (!model) {
            return res.status(404).json({
                status: "Not Found",
                message: `Activity with ID ${id} Not Found`,
                data: {}
            })
        }
        if (title == undefined || title == "") {
            return res.status(400).json({
                status: "Bad Request",
                message: "title cannot be null",
                data: {}
            })
        }
        model.title = title

        let save = await this.activityRepository.add(model)
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
        let model = await this.activityRepository.findOne(parseInt(id))
        if (!model) {
            return res.status(404).json({
                status: "Not Found",
                message: `Activity with ID ${id} Not Found`,
                data: {}
            })
        }
        await this.activityRepository.delete(model.id)
        return res.json({
            status: "Success",
            message: "Success",
            data: {}
        })
    }

}