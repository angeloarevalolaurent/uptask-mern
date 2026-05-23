import type { Request, Response } from "express";
import Project from "../models/Project";
import Task from "../models/Task";

export class TaskController {
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
}