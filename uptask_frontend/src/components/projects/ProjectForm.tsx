import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { ProjectFormData } from '@/types/index'
import ErrorMessage from '@/components/ErrorMessage'

type ProjectFormProps = {
  register: UseFormRegister<ProjectFormData>
  errors: FieldErrors<ProjectFormData>
}

export default function ProjectForm({errors, register}: ProjectFormProps) {
  return (
 <div className="space-y-10">

      {/* ===== PROJECT NAME ===== */}
      <div className="group relative">

        {/* Glow */}
        <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-fuchsia-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 blur-2xl transition-all duration-500 group-focus-within:opacity-100 group-focus-within:from-fuchsia-500/20 group-focus-within:via-purple-500/20 group-focus-within:to-indigo-500/20" />

        <div className="relative rounded-[28px] border border-gray-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 group-focus-within:border-fuchsia-300 group-focus-within:shadow-xl group-focus-within:shadow-fuchsia-100/50">

          {/* Header */}
          <div className="mb-5">
            <label
              htmlFor="projectName"
              className="block text-sm font-black uppercase tracking-[0.18em] text-gray-500"
            >
              Nombre del Proyecto
            </label>

            <p className="mt-2 text-sm text-gray-400">
              Dale un nombre profesional y fácil de identificar
            </p>
          </div>

          {/* Input */}
          <input
            id="projectName"
            type="text"
            placeholder="Ej. Plataforma SaaS de Gestión Empresarial"
            className={`
              w-full rounded-2xl border bg-gray-50/80
              px-6 py-5 text-lg font-medium text-gray-900
              placeholder:text-gray-400
              outline-none transition-all duration-300
              focus:bg-white focus:ring-4
              ${
                errors.projectName
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-gray-200 focus:border-fuchsia-500 focus:ring-fuchsia-100'
              }
            `}
            {...register('projectName', {
              required: 'El nombre del proyecto es obligatorio'
            })}
          />

          {errors.projectName && (
            <div className="mt-4">
              <ErrorMessage>
                {errors.projectName.message}
              </ErrorMessage>
            </div>
          )}

        </div>
      </div>

      {/* ===== CLIENT NAME ===== */}
      <div className="group relative">

        <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-2xl transition-all duration-500 group-focus-within:opacity-100 group-focus-within:from-indigo-500/20 group-focus-within:via-purple-500/20 group-focus-within:to-fuchsia-500/20" />

        <div className="relative rounded-[28px] border border-gray-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 group-focus-within:border-purple-300 group-focus-within:shadow-xl group-focus-within:shadow-purple-100/50">

          {/* Header */}
          <div className="mb-5">
            <label
              htmlFor="clientName"
              className="block text-sm font-black uppercase tracking-[0.18em] text-gray-500"
            >
              Cliente
            </label>

            <p className="mt-2 text-sm text-gray-400">
              Empresa, startup o persona responsable del proyecto
            </p>
          </div>

          {/* Input */}
          <input
            id="clientName"
            type="text"
            placeholder="Ej. Tech Solutions SAC"
            className={`
              w-full rounded-2xl border bg-gray-50/80
              px-6 py-5 text-lg font-medium text-gray-900
              placeholder:text-gray-400
              outline-none transition-all duration-300
              focus:bg-white focus:ring-4
              ${
                errors.clientName
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-gray-200 focus:border-purple-500 focus:ring-purple-100'
              }
            `}
            {...register('clientName', {
              required: 'El nombre del cliente es obligatorio'
            })}
          />

          {errors.clientName && (
            <div className="mt-4">
              <ErrorMessage>
                {errors.clientName.message}
              </ErrorMessage>
            </div>
          )}

        </div>
      </div>

      {/* ===== DESCRIPTION ===== */}
      <div className="group relative">

        <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-fuchsia-500/0 via-indigo-500/0 to-purple-500/0 opacity-0 blur-2xl transition-all duration-500 group-focus-within:opacity-100 group-focus-within:from-fuchsia-500/20 group-focus-within:via-indigo-500/20 group-focus-within:to-purple-500/20" />

        <div className="relative rounded-[28px] border border-gray-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 group-focus-within:border-indigo-300 group-focus-within:shadow-xl group-focus-within:shadow-indigo-100/50">

          {/* Header */}
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block text-sm font-black uppercase tracking-[0.18em] text-gray-500"
            >
              Descripción del Proyecto
            </label>

            <p className="mt-2 text-sm text-gray-400">
              Explica los objetivos, funcionalidades y alcance del proyecto
            </p>
          </div>

          {/* Textarea */}
          <textarea
            id="description"
            rows={7}
            placeholder="Describe brevemente el propósito del proyecto, sus funcionalidades principales y los objetivos que deseas alcanzar..."
            className={`
              w-full resize-none rounded-2xl border bg-gray-50/80
              px-6 py-5 text-lg leading-relaxed text-gray-900
              placeholder:text-gray-400
              outline-none transition-all duration-300
              focus:bg-white focus:ring-4
              ${
                errors.description
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
              }
            `}
            {...register('description', {
              required: 'La descripción del proyecto es obligatoria'
            })}
          />

          {/* Bottom helper */}
          <div className="mt-4 flex items-center justify-between">

            <p className="text-sm text-gray-400">
              Mientras más detallada sea la descripción, mejor organización tendrás.
            </p>

            <div
              className="
                rounded-full border border-indigo-100
                bg-indigo-50 px-4 py-2
                text-xs font-bold uppercase tracking-wider text-indigo-700
              "
            >
              Proyecto Profesional
            </div>

          </div>

          {errors.description && (
            <div className="mt-4">
              <ErrorMessage>
                {errors.description.message}
              </ErrorMessage>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}