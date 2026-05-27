
import { Link } from 'react-router-dom'

export default function CreateProjectView() {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        
        <div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
            Crear Proyecto
          </h1>

          <p className="mt-4 max-w-2xl text-lg lg:text-2xl font-light text-gray-500">
            Completa la información necesaria para crear y organizar un nuevo proyecto.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-7 py-4 text-lg font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md"
        >
          ← Volver a Proyectos
        </Link>

      </div>

    </div>
  )
}

