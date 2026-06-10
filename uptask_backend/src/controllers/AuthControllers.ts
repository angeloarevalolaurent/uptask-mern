import type {Request, Response} from 'express';
import User from '../models/user';
import { hashPassword } from '../utils/auth';
import Token from '../models/Token';
import { generateToken } from '../utils/token';
import { AuthEmail } from '../emails/AuthEmail';

export class AuthController {

    static createAccount = async (req: Request, res: Response) => {
        try{
            const {password, email} = req.body

            // Verificar si el email ya está registrado
            const userExists = await User.findOne({ email })
            if(userExists){
                return res.status(409).json({ error: 'El email ya está registrado' });
            }

            //Crear un usuario con los datos recibidos
            const user = new User(req.body)
        
            // Hash la contraseña antes de guardarla en la base de datos
            user.password = await hashPassword(password)
            
            // Generando token
            const token = new Token()
            token.token = generateToken()
            token.user = user._id

            
            // Enviar al email
            AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.email,
                token: token.token
            })


            await Promise.allSettled([user.save(), token.save()])
            res.status(201).json({ message: 'Cuenta creada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }




    static confirmAccount = async (req: Request, res: Response) => {
        try{
            const {token} = req.body

            const tokenExists = await Token.findOne({token})
            if(!tokenExists){
                const error = new Error('Token no válido')
                return res.status(401).json({error: error.message})
            }
        
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }

}



