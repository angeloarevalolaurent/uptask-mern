import type { Request, Response } from "express";



export class TaskController {
    static async createProject(req: Request, res: Response) {
        const { projectId } = req.params
        console.log("Project ID:", projectId)

        try {

        } catch (error) {
            console.error("Error creating task:", error);
            res.status(500).json({ message: "Error creating task" });
        }
    }
}