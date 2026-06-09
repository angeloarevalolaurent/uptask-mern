import type {Request, Response} from 'express';
import User from '../models/user';
import { hashPassword } from '../utils/auth';
import Token from '../models/Token';
import { generateToken } from '../utils/token';
import { transporter } from '../config/nodemailer';

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
            await transporter.sendMail({
                from: 'UpTask <admin@uptask.com>',
                to: user.email,
                subject: 'Uptask - Confirmar tu cuenta',
                text: 'Uptask - Confirma tu cuenta',
                html: `<p>Probando e-mail</p>`
            })


            await Promise.allSettled([user.save(), token.save()])
            res.status(201).json({ message: 'Cuenta creada exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }


}