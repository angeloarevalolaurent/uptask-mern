import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import ProjectForm from '@/components/projects/ProjectForm'
import type { ProjectFormData } from '@/types/index'
import { createProject } from '@/api/ProjectApi'

export default function CreateProjectView() {

  const navigate = useNavigate()

  const initialValues: ProjectFormData = {
    projectName: '',
    clientName: '',
    description: ''
  }

  const {register,handleSubmit,formState: { errors, isSubmitting }} = useForm<ProjectFormData>({
    defaultValues: initialValues
  })

  const handleForm = async (formData: ProjectFormData) => {
    const data = await createProject(formData)
    toast.success(data)
    navigate('/')
  }

  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-sm font-semibold text-purple-700">
            Gestión de Proyectos
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
            Crear Proyecto
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500 lg:text-xl">
            Completa la información necesaria para crear un nuevo proyecto
            y comenzar a organizar tareas, clientes y objetivos.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md"
        >
          <span className="text-lg">←</span>
          Volver a Proyectos
        </Link>

      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-4xl">

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">

          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600" />

          <div className="p-8 lg:p-12">

            {/* Form Heading */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Información del Proyecto
              </h2>

              <p className="mt-2 text-gray-500">
                Ingresa los datos principales para registrar tu proyecto.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(handleForm)}
              className="space-y-8"
              noValidate
            >

              <ProjectForm
                register={register}
                errors={errors}
              />

              {/* Actions */}
              <div className="flex flex-col-reverse gap-4 pt-6 sm:flex-row sm:justify-end">

                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-4 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50"
                >
                  Cancelar
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-fuchsia-500/20 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Creando Proyecto...' : 'Crear Proyecto'}
                </button>

              </div>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}