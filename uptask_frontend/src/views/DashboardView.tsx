import {useQuery} from '@tanstack/react-query'
import {getProjects} from '@/api/ProjectApi'
import ProjectList from '../components/projects/dashboard/ProjectList'
import EmptyProjects from '../components/projects/dashboard/EmptyProjects'
import DashboardHeader from '../components/projects/dashboard/DashboardHeader'
import { useAuth } from "../hooks/useAuth"
import DeleteProjectModal from "@/components/projects/dashboard/DeleteProjectModal"

export default function DashboardView() {

  const {data:user, isLoading:authLoading} = useAuth()

  const {data, isLoading} = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })

  console.log(data);
  console.log(user?._id);
  
  
  if(isLoading && authLoading) return 'Cargando proyectos...'

  if(data && user) return (
    <>
    <div className="relative overflow-hidden rounded-[36px]
        border border-white/40
        bg-white/70
        backdrop-blur-2xl
        px-8 py-10 lg:px-12
        shadow-[0_20px_80px_rgba(0,0,0,0.08)] space-y-10"> 

      {data.length ? ( 
        <>
        <DashboardHeader projectCount={data.length} />
        <ProjectList data={data}  user= {user}/>

   
        </>
      ) : ( 
        
        <EmptyProjects />
    )}

    </div>

    <DeleteProjectModal/>
  </>
  )
}