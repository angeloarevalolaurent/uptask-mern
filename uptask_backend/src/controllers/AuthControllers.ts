import type {Request, Response} from 'express';
import User from '../models/user';
import { checkPassword, hashPassword } from '../utils/auth';
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
                name: user.name,
                token: token.token
            })


            await Promise.allSettled([user.save(), token.save()])
            res.send('Cuenta creada, revisa tu email para confirmarla')
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
                return res.status(404).json({error: error.message})
            }
        
            const user = await User.findById(tokenExists.user)
            user.confirmed = true

            await Promise.allSettled([ user.save(), tokenExists.deleteOne])
            res.send('Cuenta confirmada correctamente')

        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }



    static login = async (req: Request, res: Response) => {
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})

            if (!user) {
                const error = new Error('Usuario no encontrado')
                return res.status(404).json({error: error.message})
            }

            
            if (!user.confirmed) {
                const token = new Token()
                token.user = user._id
                token.token = generateToken()
                await token.save()

                // Enviar al email
                AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.name,
                token: token.token
                })


                const error = new Error('La cuenta no ha sido confirmada, hemos enviado un e-mail de confirmacion')
                return res.status(404).json({error: error.message})
            }

                //Revisar password
            const isPasswordCorrect = await checkPassword(password, user.password)
            if (!isPasswordCorrect) {
                const error = new Error('Password Incorrecto')
                return res.status(401).json({error: error.message})
            }           

            res.send('Autenticado...')
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }


    static requestConfirmationCode = async (req: Request, res: Response) => {
        try{
            const {email} = req.body

            // Verificar si el email ya está registrado
            const user = await User.findOne({ email })
            if(!user){
                return res.status(404).json({ error: 'El Usuario no esta registrado' });
            }

            if(user.confirmed){
                return res.status(403).json({ error: 'El Usuario ya está condifrmado' });
            }
            // Generando token
            const token = new Token()
            token.token = generateToken()
            token.user = user._id

            
            // Enviar al email
            AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.name,
                token: token.token
            })


            await Promise.allSettled([user.save(), token.save()])
            res.send('Se envió un nuevo token a tu e-mail')
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la cuenta' });
        }
    }
    
}



