import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewProjectForm from './NewProjectForm'

const NewProject = () => {
    const users = useSelector(selectAllUsers)

    const content = users ? <NewProjectForm users={users} /> : <p>Loading...</p>

    return content
}

export default NewProject