import { toast } from "react-toastify"
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import {getProjects} from '@/api/ProjectApi'
import ProjectList from '../components/projects/dashboard/ProjectList'
import EmptyProjects from '../components/projects/dashboard/EmptyProjects'
import DashboardHeader from '../components/projects/dashboard/DashboardHeader'
import { deleteProject } from "@/api/ProjectApi"


export default function DashboardView() {

  const {data, isLoading} = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })


  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn: deleteProject,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      queryClient.invalidateQueries({queryKey: ['projects']})

    }
  })

  if(isLoading) return 'Cargando proyectos...'

  if(data) return (
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
        <ProjectList data={data} mutate={mutate} />
        </>
      ) : ( 
        
        <EmptyProjects />
        

    )}

    </div>
  </>
  )
}