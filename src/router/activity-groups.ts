import { Router } from 'express'
import { activityGroupsController } from '../controller/activity-groups.controller'
import { ActivityRepository } from '../repository/activity.repository'

const router = Router()
const activityController = new activityGroupsController(new ActivityRepository())

router.get('/', activityController.getAll.bind(activityController))
router.get('/:id', activityController.getOne.bind(activityController))
router.post('/', activityController.create.bind(activityController))
router.patch('/:id', activityController.update.bind(activityController))
router.delete('/:id', activityController.delete.bind(activityController))

export const ActivityGroupsRouter = router;