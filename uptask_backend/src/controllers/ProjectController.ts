import type { Request, Response } from "express";
import Project from "../models/Project";

export class ProjectController {

    static createProjects = async (req: Request, res: Response) => {
        const project = new Project(req.body)
        
        try {
            await project.save()
            res.send('Proyecto creado exitosamente')
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el proyecto' })
        }
    }   

    static getAllProjects = async (req: Request, res: Response) => {
        
        try {
            const projects = await Project.find({})
            res.json(projects)
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' })
        }
        
        
    }   
}