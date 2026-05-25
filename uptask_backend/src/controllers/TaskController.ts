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

            res.send('Task created successfully')
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
            const { taskId } = req.params
            const task = await Task.findById(taskId).populate('project')

            if (!task) {
                return res.status(404).json({ message: "Task not found" })
            }

            if (task.project._id.toString() !== req.project._id.toString()) {
                return res.status(400).json({ message: "Task does not belong to the specified project" })
            }
            
            res.json(task)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching task" })
        }
    }


    // actualizar una tarea por su id
    static async updateTask(req: Request, res: Response) {
       
        try {
            const { taskId } = req.params
            const task = await Task.findByIdAndUpdate(taskId, req.body)

            if (!task) {
                return res.status(404).json({ message: "Task not found" })
            }

            if (task.project._id.toString() !== req.project._id.toString()) {
                return res.status(400).json({ message: "Task does not belong to the specified project" })
            }
            
            res.send('  Task updated successfully')
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching task" })
        }
    }


}