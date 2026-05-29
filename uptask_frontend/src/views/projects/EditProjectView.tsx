import {useParams} from "react-router-dom"
import {useQuery} from '@tanstack/react-query'
import {getProjectById} from '@/api/ProjectApi'

export default function EditProjectView() {

    const params = useParams()
    const projectId = params.projectId!

  //  console.log(projectId)

    const {data, isLoading} = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: ( ) => getProjectById(projectId)
  })
  return (
    <>
      <div>Editar Proyecto: {projectId}</div>
    </>
  )
}
