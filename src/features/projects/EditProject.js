import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectProjectById } from './projectsApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditProjectForm from './EditProjectForm'

const EditProject = () => {
    const { id } = useParams()

    const project = useSelector(state => selectProjectById(state, id))
    const users = useSelector(selectAllUsers)

    const content = project && users ? <EditProjectForm project={project} users={users} /> : <p>Loading...</p>

    return content
}
export default EditProject