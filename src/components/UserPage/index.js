import UserView from '@comps/UserView'
import fetching from '@src/helpers/fetching'
import { useEffect, useState } from 'react'

export default function UserPage({ user, recruiter = false }) {
  // GET user who is this user assigned for // BOSS

  const [assignedTo, setAssignedTo] = useState(null)
  useEffect(() => {
    if (user?.assignedTo) {
      fetching(`/user?_id=${user.assignedTo}`).then((res) => {
        setAssignedTo(res[0])
      })
    } else {
      setAssignments(null)
    }
  }, [user])

  // GET all users assigned to this user // SUBORDINATED

  const [assignments, setAssignments] = useState([])
  useEffect(() => {
    if (user) {
      fetching(`/user?assignedTo=${user._id}`).then(setAssignments)
    }
  }, [user])

  /* console.log(
    'assignments',
    assignments,
    'assignedTo',
    assignedTo,
    'user',
    user
  ) */
  if (!user) return 'Loading ...'
  return (
    <UserView
      user={user}
      assignedTo={assignedTo}
      assignments={assignments}
      recruiter={recruiter}
    />
  )
}
