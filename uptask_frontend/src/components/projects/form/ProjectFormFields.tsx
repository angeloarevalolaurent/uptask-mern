import type { UseFormRegister, FieldErrors } from 'react-hook-form'

import type { ProjectFormData } from '@/types/index'

import ErrorMessage from '@/components/ErrorMessage'

type ProjectFormFieldsProps = {
  register: UseFormRegister<ProjectFormData>
  errors: FieldErrors<ProjectFormData>
}

export default function ProjectFormFields({
  register,
  errors
}: ProjectFormFieldsProps) {

  const inputStyles = `
    w-full
    rounded-2xl
    border
    border-slate-300
    bg-white
    px-4
    py-3
    text-sm
    text-slate-700
    placeholder:text-slate-400
    outline-none
    transition-all
    duration-200
    focus:border-indigo-500
    focus:ring-4
    focus:ring-indigo-100
  `

  const labelStyles = `
    mb-2
    block
    text-sm
    font-semibold
    text-slate-700
  `

  return (

    <div className="space-y-7">

      {/* PROJECT NAME */}
      <div>

        <label
          htmlFor="projectName"
          className={labelStyles}
        >
          Nombre del Proyecto
        </label>

        <input
          id="projectName"
          type="text"
          placeholder="Ej. Plataforma SaaS"
          className={inputStyles}
          {...register('projectName', {
            required: 'El nombre del proyecto es obligatorio'
          })}
        />

        {errors.projectName && (
          <ErrorMessage>
            {errors.projectName.message}
          </ErrorMessage>
        )}

      </div>

      {/* CLIENT NAME */}
      <div>

        <label
          htmlFor="clientName"
          className={labelStyles}
        >
          Cliente
        </label>

        <input
          id="clientName"
          type="text"
          placeholder="Ej. Tech Solutions SAC"
          className={inputStyles}
          {...register('clientName', {
            required: 'El cliente es obligatorio'
          })}
        />

        {errors.clientName && (
          <ErrorMessage>
            {errors.clientName.message}
          </ErrorMessage>
        )}

      </div>

      {/* DESCRIPTION */}
      <div>

        <label
          htmlFor="description"
          className={labelStyles}
        >
          Descripción
        </label>

        <textarea
          id="description"
          rows={6}
          placeholder="Describe el proyecto..."
          className={`${inputStyles} resize-none`}
          {...register('description', {
            required: 'La descripción es obligatoria'
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