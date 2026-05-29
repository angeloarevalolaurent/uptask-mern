import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import type { ProjectFormData } from '@/types/index'

import { createProject } from '@/api/ProjectApi'

import ProjectForm from '@/components/projects/form/ProjectForm'
import ProjectFormLayout from '@/components/projects/form/ProjectFormLayout'

export default function CreateProjectView() {

  const navigate = useNavigate()

  const initialValues: ProjectFormData = {
    projectName: '',
    clientName: '',
    description: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProjectFormData>({
    defaultValues: initialValues
  })

  const { mutate } = useMutation({
    mutationFn: createProject,

    onError: (error: Error) => {
      toast.error(error.message)
    },

    onSuccess: (data) => {
      toast.success(data)
      navigate('/')
    }
  })

  const handleForm = (formData: ProjectFormData) => {
    mutate(formData)
  }

  return (

    <ProjectFormLayout
      title="Crear Proyecto"
      subtitle="Organiza ideas, clientes y objetivos en un espacio moderno."
      tag="Nuevo Proyecto"
    >

      <ProjectForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={handleForm}
        isSubmitting={isSubmitting}
        buttonText="Crear Proyecto"
      />

    </ProjectFormLayout>

  )
}