import { selectAllUsers } from '../users/usersApiSlice'

const AssignProjects = (project) => {
  // algorithm to determine who gets assigned what project
  const users = useSelector(selectAllUsers)
  const userPool = []

  for (let user in users) {
    if (user.active === true && project.creator !== user._id) {
      userPool.push(user)
    }
  }
  //return (<></>)
}

export default AssignProjects