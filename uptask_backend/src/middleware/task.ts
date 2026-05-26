import type { Request, Response, NextFunction} from "express"
import Task, {ITask} from "../models/Task"

declare global {
    namespace Express {
        interface Request {
            task: ITask
        }
    }
}

export async function taskExists(req: Request, res: Response, next: NextFunction) {
   try {
        const { taskId } = req.params
        const task = await Task.findById(taskId)

        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        req.task = task
        next()
    } catch (error) {
        console.error("Error validating task existence:", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
