
import {useQuery} from '@tanstack/react-query'
import {getProjects} from '@/api/ProjectApi'
import ProjectList from './projects/ProjectList'
import EmptyProjects from './projects/EmptyProjects'
import DashboardHeader from './projects/DashboardHeader'

export default function DashboardView() {

  const {data, isLoading} = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
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
      
      
      <DashboardHeader projectCount={data.length} />

      {data.length ? ( 
        <ProjectList data={data} />
      ) : ( 
        
        <EmptyProjects />
        

    )}

    </div>
  </>
  )
}