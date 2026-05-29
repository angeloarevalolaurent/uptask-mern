import type {
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit
} from 'react-hook-form'

import type { ProjectFormData } from '@/types/index'

import ProjectFormFields from '@/components/projects/form/ProjectFormFields'

type ProjectFormProps = {
  register: UseFormRegister<ProjectFormData>
  errors: FieldErrors<ProjectFormData>
  handleSubmit: UseFormHandleSubmit<ProjectFormData>
  onSubmit: SubmitHandler<ProjectFormData>
  isSubmitting: boolean
  buttonText: string
}

export default function ProjectForm({
  register,
  errors,
  handleSubmit,
  onSubmit,
  isSubmitting,
  buttonText
}: ProjectFormProps) {

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >

      <ProjectFormFields
        register={register}
        errors={errors}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full
          rounded-2xl
          bg-indigo-600
          px-6
          py-4
          text-sm
          font-semibold
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:bg-indigo-700
          hover:shadow-lg
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {isSubmitting ? 'Creando...' : buttonText}
      </button>

    </form>

  )
}