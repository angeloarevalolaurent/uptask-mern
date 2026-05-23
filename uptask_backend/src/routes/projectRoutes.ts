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
router.post('/:projectId/tasks',
   validateProjectExists,
   TaskController.createTask
)







export default router