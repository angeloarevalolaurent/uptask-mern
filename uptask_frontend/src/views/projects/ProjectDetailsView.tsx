import {  Navigate,useParams} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectApi"
import ProjectHeader from "@/components/projects/project/ProjectHeader"


export default function ProjectDetailsView() {

  const params = useParams()
  const projectId= params.projectId!
  // 1. QUERY
  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })

    if(isLoading) return 'Cargando proyecto...'
    if(isError) return <Navigate to="/404" />

    if(data) return (
    <>
        <ProjectHeader 
            data={data}
        />

        
    </>
  )
}
