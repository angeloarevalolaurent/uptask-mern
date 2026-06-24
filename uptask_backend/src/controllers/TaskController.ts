import type { Request, Response } from "express";
import Project from "../models/Project";
import Task from "../models/Task";

export class TaskController {
    // crear una tarea y asociarla a un proyecto
    static async createTask(req: Request, res: Response) {

        const { projectId } = req.params
        const project = await Project.findById(projectId)

        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }
        
        try {
            const task = new Task(req.body)
            task.project = project._id
            project.tasks.push(task._id)

            await Promise.allSettled([task.save(), project.save()])

            res.send('Tarea creada exitosamente')
        } catch (error) {
            console.error(error);
            
        }
    }

    // traer todas las tareas de un proyecto
    static async getProjectTasks(req: Request, res: Response) {
        try {
            const taks = await  Task.find({ project: req.project._id }).populate('project')
            res.json(taks)      
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching tasks" })
        }

    }


    // traer una tarea por su id
    static async getTaskById(req: Request, res: Response) {
       
        try {
            const task = await Task.findById(req.task._id)
                        .populate({path: 'completedBy.user', select: '_id name email'})

            res.json(task)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching task" })
        }
    }


    // actualizar una tarea por su id
    static async updateTask(req: Request, res: Response) {
       
        try {

            req.task.name = req.body.name
            req.task.description = req.body.description

            await req.task.save()
            res.send('  Task updated successfully')
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching task" })
        }
    }

    // eliminar una tarea por su id
    static  deleteTask = async (req: Request, res: Response) => {
       
        try {
            
            req.project.tasks = req.project.tasks.filter( task => task.toString() !== req.task._id.toString())
            await Promise.allSettled([req.task.deleteOne(), req.project.save()])

            res.send(' Task deleted successfully')

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching task" })
        }
    }


    
    
    static  updateStatus = async (req: Request, res: Response) => {

        try {
            
            const { status } = req.body
            req.task.status = status
          
            const data = {
                user: req.user._id,
                status
            }
            req.task.completedBy.push(data)
            await req.task.save()
            res.send('Tarea actualizada exitosamente')
        }  catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Error interno del servidor' })
        }
    }
}