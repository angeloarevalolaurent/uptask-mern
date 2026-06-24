import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { TaskController } from "../controllers/TaskController";
import { validateProjectExists } from "../middleware/project";
import { handleInputErrors } from "../middleware/validation";
import { hasAuthorization, taskExists } from "../middleware/task";
import { taskBelongsToProject } from "../middleware/task";
import { authenticate } from "../middleware/auth";
import { TeamMemberController } from "../controllers/TeamController";
import { NoteController } from "../controllers/NoteController";

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
   hasAuthorization,
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
   hasAuthorization,
   param('taskId').isMongoId().withMessage('ID de tarea no válido'),
   body('name').notEmpty().withMessage('El nombre de la tarea es obligatorio'),
   body('description').notEmpty().withMessage('La descripción de la tarea es obligatoria'),
   handleInputErrors,
   TaskController.updateTask
)

// eliminar una tarea por su id
router.delete('/:projectId/tasks/:taskId',
   hasAuthorization,
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

router.delete('/:projectId/team/:userId',
   param('userId')
      .isMongoId().withMessage('ID no válido'),
   handleInputErrors,
   TeamMemberController.removeMemberById
)


/**Routes for Notes */  
router.post('/:projectId/tasks/:taskId/notes',
   body('content')
      .notEmpty().withMessage('El Contenido de la nota es obligatorio'),
   handleInputErrors,
   NoteController.createNote
)

router.get('/:projectId/tasks/:taskId/notes',
   NoteController.getTaskNotes
)

router.delete('/:projectId/tasks/:taskId/notes/:noteId',
   param('noteId').isMongoId().withMessage('ID No Válido'),
   handleInputErrors,
   NoteController.deleteNotes
)
export default router