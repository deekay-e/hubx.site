import { useGetProjectsQuery } from './projectsApiSlice'
import Project from './Project'

const ProjectsList = () => {
  const {
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProjectsQuery()

  let content
  if (isLoading) content = <p>Loading...</p>

  if (isError) {
    content = <p className='errmsg'>{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids } = projects

    const tableContent = ids?.length
      ? ids.map(projectId => <Project key={projectId} projectId={projectId} />)
      : null

    content = (
      <table className='table table--projects'>
        <thead className='table__thead'>
          <tr>
            <th scope='col' className=''>Creator</th>
            <th scope='col' className=''>Created</th>
            <th scope='col' className=''>Updated</th>
            <th scope='col' className=''>Title</th>
            <th scope='col' className=''>Owner</th>
            <th scope='col' className=''>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    )
  }
  return content
}

export default ProjectsList