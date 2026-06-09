import type {Request, Response} from 'express';
import User from '../models/user';
import { hashPassword } from '../utils/auth';

export class AuthController {

    static createAccount = async (req: Request, res: Response) => {
        try{
            const {password} = req.body
            const user = new User(req.body)
        
            // Hash the password before saving the user
            user.password = await hashPassword(password)
            
            await user.save()
            res.status(201).json({ message: 'Cuenta creada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }


}