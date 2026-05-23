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



    static getProjectById = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
            const project = await Project.findById(id).populate('tasks')

            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            res.json(project)

        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' })
        }
                
    }   


    static updateProject = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
           const project = await Project.findByIdAndUpdate(id, req.body, { new: true })

            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            res.send( 'Proyecto actualizado exitosamente')

        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' })
        }
                
    }  



      static deleteProject = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
          const project = await Project.findById(id)
          
            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }

            await project.deleteOne()

            res.send( 'Proyecto eliminado exitosamente')

        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' })
        }
                
    }  


}