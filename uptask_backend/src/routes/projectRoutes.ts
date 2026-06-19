import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { TaskController } from "../controllers/TaskController";
import { validateProjectExists } from "../middleware/project";
import { handleInputErrors } from "../middleware/validation";
import { taskExists } from "../middleware/task";
import { taskBelongsToProject } from "../middleware/task";
import { authenticate } from "../middleware/auth";
import { TeamMemberController } from "../controllers/TeamController";

const router = Router()

router.use(authenticate)

router.post('/',
   body('projectName').notEmpty().withMessage('El nombre del proyecto es obligatorio'),
   body('clientName').notEmpty().withMessage('El nombre del cliente es obligatorio'),
   body('description').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
    
   handleInputErrors,
   ProjectController.createProjects
)


router.get('/',ProjectController.getAllProjects)

router.get('/:id',
   param('id').isMongoId().withMessage('ID no válido'),
   handleInputErrors,
   ProjectController.getProjectById
)


router.put('/:id',
   param('id').isMongoId().withMessage('ID no válido'),
   body('projectName').notEmpty().withMessage('El nombre del proyecto es obligatorio'),
   body('clientName').notEmpty().withMessage('El nombre del cliente es obligatorio'),
   body('description').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
   handleInputErrors,
   ProjectController.updateProject
)


router.delete('/:id',
   param('id').isMongoId().withMessage('ID no válido'),
   handleInputErrors,
   ProjectController.deleteProject
)




/**Routes fro tasks*/
// Middleware para validar que el proyecto existe antes de manejar las rutas de tareas
router.param('projectId', validateProjectExists)

// crear una tarea y asociarla a un proyecto
router.post('/:projectId/tasks', 
   body('name').notEmpty().withMessage('El nombre de la tarea es obligatorio'),
   body('description').notEmpty().withMessage('La descripción de la tarea es obligatoria'),
   handleInputErrors,
   TaskController.createTask
)


// traer todas las tareas de un proyecto
router.get('/:projectId/tasks',
   TaskController.getProjectTasks
)

// Middleware para validar que la tarea existe antes de manejar las rutas que requieren un taskId
router.param('taskId', taskExists)
router.param('taskId', taskBelongsToProject)




// traer una tarea por su id
router.get('/:projectId/tasks/:taskId',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   handleInputErrors,
   TaskController.getTaskById
)

// actualizar una tarea por su id
router.put('/:projectId/tasks/:taskId',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   body('name').notEmpty().withMessage('El nombre de la tarea es obligatorio'),
   body('description').notEmpty().withMessage('La descripción de la tarea es obligatoria'),
   handleInputErrors,
   TaskController.updateTask
)

// eliminar una tarea por su id
router.delete('/:projectId/tasks/:taskId',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   handleInputErrors,
   TaskController.deleteTask
)

// actualizar el estado de una tarea
router.post('/:projectId/tasks/:taskId/status',
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   body('status').notEmpty().withMessage('El estado de la tarea es obligatorio'),
   handleInputErrors,
   TaskController.updateStatus
)


/**Routes for teams */
router.post('/:projectId/team/find',
   body('email')
      .isEmail().toLowerCase().withMessage('E-mail no válido'),
   handleInputErrors,
   TeamMemberController.findMemberByEmail
)

router.get('/:projectId/team',
   TeamMemberController.getProjectTeam
)


router.post('/:projectId/team',
   body('id')
      .isMongoId().withMessage('ID no válido'),
   handleInputErrors,
   TeamMemberController.addMemberById
)

router.delete('/:projectId/team',
   body('id')
      .isMongoId().withMessage('ID no válido'),
   handleInputErrors,
   TeamMemberController.removeMemberById
)
export default router