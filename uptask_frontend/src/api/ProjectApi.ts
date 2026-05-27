import api from '@/lib/axios'
import type {ProjectFormData} from '@/types/index'

export async function createProject(fromData: ProjectFormData) {
    
    try{
        const {data} = await api.post('/projects', fromData)
        return data
    }catch(error){
        console.error('Error creating project:', error)
    }
}