import type { Request, Response, NextFunction} from "express"
import Project from "../models/Project"
import { IProject } from "../models/Project"

declare global {
    namespace Express {
        interface Request {
            project: IProject
        }
    }
}

export async function validateProjectExists(req: Request, res: Response, next: NextFunction) {
   try {
        const { projectId } = req.params
        const project = await Project.findById(projectId)
        
        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }
        req.project = project
        next()
    } catch (error) {
        console.error("Error validating project existence:", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}