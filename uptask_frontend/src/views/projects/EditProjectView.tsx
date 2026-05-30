import { Navigate, useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import type { ProjectFormData } from "@/types/index"
import { getProjectById, updateProject } from "@/api/ProjectApi"

import ProjectFormLayout from "@/components/projects/form/ProjectFormLayout"
import ProjectForm from "@/components/projects/form/ProjectForm"

export default function EditProjectView() {
  const navigate = useNavigate()

  const { projectId } = useParams()

  // 1. QUERY
  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId!),
    enabled: !!projectId
  })

  // 2. FORM
  const {register, handleSubmit, reset,formState: { errors, isSubmitting }
  } = useForm<ProjectFormData>({
    defaultValues: {
      projectName: "",
      clientName: "",
      description: ""
    }
  })

  // 🔥 3. CORRECTO: usar useEffect
  useEffect(() => {
    if (data) {
      reset({
        projectName: data.projectName,
        clientName: data.clientName,
        description: data.description
      })
    }
  }, [data, reset])


  const queryClient = useQueryClient()

  // 4. MUTATION
  const { mutate } = useMutation({
    mutationFn: updateProject,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] })
      queryClient.invalidateQueries({ queryKey: ["editProject", projectId] })
      toast.success(data)
      navigate("/")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = (formData: ProjectFormData) => {
    mutate({
      _id: projectId!,
      ...formData
    })
  }

  if (isLoading) return "Cargando proyecto..."
  if (isError) return <Navigate to="/404" />

  return (
    <ProjectFormLayout
      title="Editar Proyecto"
      subtitle="Actualiza la información del proyecto"
      tag="Edición"
    >
      <ProjectForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        buttonText="Guardar Cambios"
      />
    </ProjectFormLayout>
  )
}