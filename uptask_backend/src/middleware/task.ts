import type { Request, Response, NextFunction} from "express"
import Task, {ITask} from "../models/Task"
import mongoose from "mongoose";

declare global {
    namespace Express {
        interface Request {
            task: ITask
        }
    }
}

export async function taskExists(req: Request, res: Response, next: NextFunction) {
   try {
        const { taskId } = req.params as { taskId: string }

        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(404).json({
                error: "Tarea no encontrada"
            })
        }

        const task = await Task.findById(taskId)

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }
        req.task = task
        next()
    } catch (error) {
        console.error( error)
        return res.status(500).json({ error: "Internal server error" })
    }
}



export function taskBelongsToProject(req: Request, res: Response, next: NextFunction) {
     if (req.task.project._id.toString() !== req.project._id.toString()) {
         return res.status(400).json({ message: "Task does not belong to the specified project" })
    }

    next()
}