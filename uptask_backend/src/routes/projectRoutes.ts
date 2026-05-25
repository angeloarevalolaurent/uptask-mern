import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { TaskController } from "../controllers/TaskController";
import { validateProjectExists } from "../middleware/project";
import { handleValidationErrors } from "../middleware/validation";

const router = Router()

router.post('/',
   body('projectName').notEmpty().withMessage('El nombre del proyecto es obligatorio'),
   body('clientName').notEmpty().withMessage('El nombre del cliente es obligatorio'),
   body('description').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
    
   handleValidationErrors,
   ProjectController.createProjects
)


router.get('/',ProjectController.getAllProjects)

router.get('/:id',
   param('id').isMongoId().withMessage('ID no válido'),
   handleValidationErrors,
   ProjectController.getProjectById
)


router.put('/:id',
   param('id').isMongoId().withMessage('ID no válido'),
   body('projectName').notEmpty().withMessage('El nombre del proyecto es obligatorio'),
   body('clientName').notEmpty().withMessage('El nombre del cliente es obligatorio'),
   body('description').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
   handleValidationErrors,
   ProjectController.updateProject
)


router.delete('/:id',
   param('id').isMongoId().withMessage('ID no válido'),
   handleValidationErrors,
   ProjectController.deleteProject
)




/**Routes fro tasks*/
// Middleware para validar que el proyecto existe antes de manejar las rutas de tareas
router.param('projectId', validateProjectExists)

// crear una tarea y asociarla a un proyecto
router.post('/:projectId/tasks', 
   body('name').notEmpty().withMessage('El nombre de la tarea es obligatorio'),
   body('description').notEmpty().withMessage('La descripción de la tarea es obligatoria'),
   handleValidationErrors,
   TaskController.createTask
)


// traer todas las tareas de un proyecto
router.get('/:projectId/tasks',
   TaskController.getProjectTasks
)


// traer una tarea por su id
router.get('/:projectId/tasks/:taskId',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   handleValidationErrors,
   TaskController.getTaskById
)

// actualizar una tarea por su id
router.put('/:projectId/tasks/:taskId',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   body('name').notEmpty().withMessage('El nombre de la tarea es obligatorio'),
   body('description').notEmpty().withMessage('La descripción de la tarea es obligatoria'),
   handleValidationErrors,
   TaskController.updateTask
)

// eliminar una tarea por su id
router.delete('/:projectId/tasks/:taskId',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   handleValidationErrors,
   TaskController.deleteTask
)

export default router