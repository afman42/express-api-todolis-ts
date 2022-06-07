import { Router } from 'express'
import { todoItemsController } from '../controller/todo-items.controller'
import { TodoRepository } from '../repository/todo.repository'

const router = Router()
const itemController = new todoItemsController(new TodoRepository)

router.get('/', itemController.getAll.bind(itemController))
router.get('/:id', itemController.getOne.bind(itemController))
router.post('/', itemController.create.bind(itemController))
router.patch('/:id', itemController.update.bind(itemController))
router.delete('/:id', itemController.delete.bind(itemController))

export const TodoItemsRouter = router;