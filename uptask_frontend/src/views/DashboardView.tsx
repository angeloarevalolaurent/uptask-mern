import { Link } from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {getProjects} from '@/api/ProjectApi'

export default function DashboardView() {

  const {data, isLoading} = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })

  if(isLoading) return 'Cargando proyectos...'

  if(data) return (
    <>
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900">
            Mis Proyectos
          </h1>

          <p className="text-lg lg:text-2xl text-gray-500 mt-3">
            Administra y da seguimiento a todos tus proyectos
          </p>
        </div>

        <Link
          to="/projects/create"
          className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 hover:bg-purple-700 hover:scale-[1.02]"
        >
          + Nuevo Proyecto
        </Link>

      </div>

      {data.length ? ( 
        <p>Si hay proyectos</p>
      ) : ( 
    
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-14 shadow-sm">
        <div className="flex flex-col items-center text-center">
          
          <h2 className="text-2xl font-bold text-gray-800">
            Aún no tienes proyectos
          </h2>

          <p className="mt-3 max-w-md text-gray-500">
            Comienza creando tu primer proyecto y organiza tus tareas,
            equipos y objetivos de manera eficiente.
          </p>

          <Link
            to="/projects/create"
            className="mt-8 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-black"
          >
            Crear Proyecto
          </Link>

        </div>
      </div>
    )}

    </div>
  </>
  )
}