import {isAxiosError} from 'axios'
import api from '@/lib/axios'
import{ type Project ,type TaskFormData, type Task, taskSchema } from '@/types/index'


type TaskAPI = {
    formData: TaskFormData
    projectId: Project["_id"]
    taskId: Task["_id"]
    status: Task["status"]
}



export async function createTask({formData, projectId}: Pick<TaskAPI, "formData" | "projectId">) {

    try{
        const url = `/projects/${projectId}/tasks`
        const {data} = await api.post<string>(url, formData)
        return data
    
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}


export async function getTaskById({projectId, taskId}: Pick<TaskAPI, "projectId" | "taskId">) {

    try{
        const url = `/projects/${projectId}/tasks/${taskId}`
        const {data} = await api(url)
        console.log(data);
        return data

        
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}



export async function updateTask({formData, projectId, taskId}: Pick<TaskAPI, "formData" | "projectId" | "taskId">) {

    try{
        const url = `/projects/${projectId}/tasks/${taskId}`
        const {data} = await api.put(url, formData)
        return data
    
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}


export async function deleteTask({projectId, taskId}: Pick<TaskAPI, "projectId" | "taskId">) {

    try{
        const url = `/projects/${projectId}/tasks/${taskId}`
        const {data} = await api.delete<string>(url)
        return data
    
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}




export async function updateStatus({projectId, taskId, status}: Pick<TaskAPI, "projectId" | "taskId" | "status">) {

    try{
        const url = `/projects/${projectId}/tasks/${taskId}/status`
        const {data} = await api.post<string>(url, { status })
        return data
    
    }catch(error){
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}