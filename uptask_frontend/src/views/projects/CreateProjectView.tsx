import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {useMutation} from '@tanstack/react-query'
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

  const {mutate} = useMutation({
    mutationFn: createProject,
      onError:(error)=> {
        toast.error(error.message)
      },

      onSuccess: (data) => {
        toast.success(data)
        navigate('/')
      }
  })


  const handleForm =(formData: ProjectFormData) => mutate(formData)

  return (
   <div className="relative isolate">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute left-[-120px] top-10
            h-72 w-72 rounded-full
            bg-fuchsia-300/20 blur-3xl
          "
        />

        <div
          className="
            absolute right-[-120px] top-40
            h-80 w-80 rounded-full
            bg-indigo-300/20 blur-3xl
          "
        />

      </div>

      <div className="space-y-12">

        {/* ================= HEADER ================= */}
        <div
          className="
            relative overflow-hidden rounded-[36px]
            border border-white/40
            bg-white/80
            p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)]
            backdrop-blur-2xl
            lg:p-12
          "
        >

          {/* Glow */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-fuchsia-100/40
              via-white
              to-indigo-100/40
            "
          />

          {/* Decorative */}
          <div
            className="
              absolute -right-16 -top-16
              h-52 w-52 rounded-full
              bg-fuchsia-400/10 blur-3xl
            "
          />

          <div
            className="
              absolute -bottom-20 left-0
              h-56 w-56 rounded-full
              bg-indigo-400/10 blur-3xl
            "
          />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div className="max-w-3xl">

              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-fuchsia-200
                  bg-white/80
                  px-5 py-2
                  text-sm font-bold
                  tracking-wide text-fuchsia-700
                  shadow-sm
                  backdrop-blur-xl
                "
              >
                Gestión Inteligente de Proyectos
              </div>

              <h1
                className="
                  mt-6 text-5xl font-black
                  tracking-tight text-gray-900
                  lg:text-5xl
                "
              >
                Crea proyectos con una experiencia moderna
              </h1>

              <p
                className="
                  mt-6 max-w-2xl
                  text-lg leading-relaxed text-gray-600
                  lg:text-xl
                "
              >
                Organiza ideas, clientes y objetivos en un espacio visual,
                elegante y preparado para equipos modernos.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                to="/"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-2xl border border-white/60
                  bg-white/90 px-7 py-4
                  font-semibold text-gray-700
                  shadow-lg shadow-gray-200/40
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-gray-300
                  hover:shadow-xl
                "
              >
                <span className="text-lg">←</span>
                Volver
              </Link>

            </div>



          </div>


                  {/* ================= FORM CONTAINER ================= */}
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-14">

          <div
            className="
              relative overflow-hidden rounded-[40px]
              border border-white/40
              bg-white/85
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
            "
          >

            {/* Top Gradient */}
            <div
              className="
                absolute inset-x-0 top-0 h-1.5
                bg-gradient-to-r
                from-fuchsia-600
                via-purple-600
                to-indigo-600
              "
            />

            {/* Glow */}
            <div
              className="
                absolute right-0 top-0
                h-72 w-72 rounded-full
                bg-fuchsia-400/10 blur-3xl
              "
            />

            <div
              className="
                absolute bottom-0 left-0
                h-72 w-72 rounded-full
                bg-indigo-400/10 blur-3xl
              "
            />

            <div className="relative z-10 p-8 lg:p-14">

              {/* Form Header */}
              <div className="mb-12">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      h-[1px] w-14
                      bg-gradient-to-r
                      from-fuchsia-500
                      to-purple-500
                    "
                  />

                  <span
                    className="
                      text-sm font-black uppercase
                      tracking-[0.25em] text-fuchsia-600
                    "
                  >
                    Nuevo Proyecto
                  </span>

                </div>

                <h2
                  className="
                    mt-5 text-3xl font-black
                    tracking-tight text-gray-900
                    lg:text-4xl
                  "
                >
                  Información Principal
                </h2>

                <p
                  className="
                    mt-4 max-w-2xl
                    text-lg leading-relaxed text-gray-500
                  "
                >
                  Completa los datos necesarios para comenzar a gestionar
                  tu proyecto de manera profesional.
                </p>

              </div>

              {/* ================= FORM ================= */}
              <form
                onSubmit={handleSubmit(handleForm)}
                className="space-y-10"
                noValidate
              >

                <ProjectForm
                  register={register}
                  errors={errors}
                />

                {/* Actions */}
                <div
                  className="
                    flex flex-col-reverse gap-4
                    border-t border-gray-100 pt-8
                    sm:flex-row sm:justify-end
                  "
                >

                  <Link
                    to="/"
                    className="
                      inline-flex items-center justify-center
                      rounded-2xl border border-gray-200
                      bg-white px-7 py-4
                      font-semibold text-gray-700
                      shadow-sm
                      transition-all duration-300
                      hover:border-gray-300
                      hover:bg-gray-50
                    "
                  >
                    Cancelar
                  </Link>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group relative overflow-hidden
                      rounded-2xl
                      bg-gradient-to-r
                      from-fuchsia-600
                      via-purple-600
                      to-indigo-600
                      px-9 py-4
                      text-lg font-bold text-white
                      shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(168,85,247,0.45)]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >

                    <span
                      className="
                        absolute inset-0
                        bg-white/10 opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />

                    <span className="relative z-10">
                      {isSubmitting
                        ? 'Creando Proyecto...'
                        : 'Crear Proyecto'}
                    </span>

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
        </div>



      </div>

    </div>
  )
}