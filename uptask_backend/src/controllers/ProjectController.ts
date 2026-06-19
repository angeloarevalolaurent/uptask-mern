import type { Request, Response } from "express";
import Project from "../models/Project";

export class ProjectController {

    static createProjects = async (req: Request, res: Response) => {
        const project = new Project(req.body)


        //Asigna un manager
        project.manager = req.user._id
        
        try {
            await project.save()
            res.send('Proyecto creado exitosamente')
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el proyecto' })
        }
    }   

    static getAllProjects = async (req: Request, res: Response) => {
        
        try {
            const projects = await Project.find({
                $or:[
                    {manager: {$in: req.user._id}}
                ]
            })
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

            if (project.manager.toString() !== req.user._id.toString()) {
                const error = new Error('Acción no valida')
                return res.status(404).json({error: error.message})
            }

            res.json(project)

        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' })
        }
                
    }   


    static updateProject = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
           const project = await Project.findById(id)

            if (!project) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }


            if (project.manager.toString() !== req.user._id.toString()) {
                const error = new Error('Solo el Manager puede actualizar el proyecto')
                return res.status(404).json({error: error.message})
            }            

            project.clientName = req.body.clientName
            project.projectName = req.body.projectName
            project.description = req.body.description
            await project.save()
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

            if (project.manager.toString() !== req.user._id.toString()) {
                const error = new Error('Solo el Manager puede Eliminar el proyecto')
                return res.status(404).json({error: error.message})
            }             

            await project.deleteOne()

            res.send( 'Proyecto eliminado exitosamente')

        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' })
        }
                
    }  


}