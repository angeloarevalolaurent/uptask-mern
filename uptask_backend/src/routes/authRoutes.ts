import {Router} from 'express';
import {body} from 'express-validator';
import { AuthController } from '../controllers/AuthControllers';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.post('/create-account', 
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    body('password')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('password_confirmation')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }),
    body('email')
        .isEmail().withMessage('El email no es válido'),
    
    handleInputErrors,
    AuthController.createAccount
)


router.post('/confirm-account',
    body('token')
        .notEmpty().withMessage('El token no puede ir vacio'),
    handleInputErrors,
    AuthController.confirmAccount
)


router.post('/login',
    body('email')
        .isEmail().withMessage('E-mail no válido'),
    body('password')
        .notEmpty().withMessage('El password no puede ir vacio'),
    handleInputErrors,
    AuthController.login
)

export default router;