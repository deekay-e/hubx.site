import { PencilSquare } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectProjectById } from './projectsApiSlice'

const Project = ({ projectId }) => {
    const project = useSelector(state => selectProjectById(state, projectId))

    const navigate = useNavigate()
    if (project) {
      const created = new Date(project.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })
      const updated = new Date(project.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

      const handleEdit = () => navigate(`/dash/projects/${projectId}`)

      return (
        <tr className=''>
          <td className=''>
            {project.completed
              ? <span className=''>Completed</span>
              : <span className=''>Open</span>
            }
          </td>
          <td className=''>{created}</td>
          <td className=''>{updated}</td>
          <td className=''>{project.title}</td>
          <td className=''>{project.creator}</td>

          <td className=''>
            <button
              className=''
              onClick={handleEdit}
            >
              <PencilSquare size={24} />
            </button>
          </td>
        </tr>
      )
    } else return null
}

export default Project