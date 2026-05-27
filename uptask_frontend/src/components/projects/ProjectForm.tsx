import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { ProjectFormData } from '@/types/index'
import ErrorMessage from '@/components/ErrorMessage'

type ProjectFormProps = {
  register: UseFormRegister<ProjectFormData>
  errors: FieldErrors<ProjectFormData>
}

export default function ProjectForm({errors, register}: ProjectFormProps) {
  return (
    <div className="space-y-8">

      {/* Project Name */}
      <div className="space-y-3">

        <label
          htmlFor="projectName"
          className="block text-sm font-bold uppercase tracking-wide text-gray-700"
        >
          Nombre del Proyecto
        </label>

        <div className="relative">
          <input
            id="projectName"
            type="text"
            placeholder="Ej. Plataforma de Gestión Empresarial"
            className={`
              w-full rounded-2xl border bg-gray-50 px-5 py-4 text-lg
              text-gray-900 placeholder:text-gray-400
              outline-none transition-all duration-200
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
        </div>

        {errors.projectName && (
          <ErrorMessage>
            {errors.projectName.message}
          </ErrorMessage>
        )}

      </div>

      {/* Client Name */}
      <div className="space-y-3">

        <label
          htmlFor="clientName"
          className="block text-sm font-bold uppercase tracking-wide text-gray-700"
        >
          Nombre del Cliente
        </label>

        <input
          id="clientName"
          type="text"
          placeholder="Ej. Empresa SAC"
          className={`
            w-full rounded-2xl border bg-gray-50 px-5 py-4 text-lg
            text-gray-900 placeholder:text-gray-400
            outline-none transition-all duration-200
            focus:bg-white focus:ring-4
            ${
              errors.clientName
                ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                : 'border-gray-200 focus:border-fuchsia-500 focus:ring-fuchsia-100'
            }
          `}
          {...register('clientName', {
            required: 'El nombre del cliente es obligatorio'
          })}
        />

        {errors.clientName && (
          <ErrorMessage>
            {errors.clientName.message}
          </ErrorMessage>
        )}

      </div>

      {/* Description */}
      <div className="space-y-3">

        <label
          htmlFor="description"
          className="block text-sm font-bold uppercase tracking-wide text-gray-700"
        >
          Descripción
        </label>

        <textarea
          id="description"
          rows={6}
          placeholder="Describe brevemente los objetivos y detalles del proyecto..."
          className={`
            w-full resize-none rounded-2xl border bg-gray-50 px-5 py-4 text-lg
            text-gray-900 placeholder:text-gray-400
            outline-none transition-all duration-200
            focus:bg-white focus:ring-4
            ${
              errors.description
                ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                : 'border-gray-200 focus:border-fuchsia-500 focus:ring-fuchsia-100'
            }
          `}
          {...register('description', {
            required: 'La descripción del proyecto es obligatoria'
          })}
        />

        {errors.description && (
          <ErrorMessage>
            {errors.description.message}
          </ErrorMessage>
        )}

      </div>

    </div>
  )
}