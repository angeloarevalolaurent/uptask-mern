import api from '@/lib/axios'
import type {ProjectFormData} from '@/types/index'
import {isAxiosError} from 'axios'
import {dashboardProjectSchema} from '@/types/index'

export async function createProject(fromData: ProjectFormData) {
    
    try{
        const {data} = await api.post('/projects', fromData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function getProjects() {
    
    try{
        const {data} = await api.get('/projects')
        const response = dashboardProjectSchema.safeParse(data)
        if(response.success) {
            return response.data 
        }
       
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
    
}