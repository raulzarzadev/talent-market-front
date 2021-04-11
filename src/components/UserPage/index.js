import UserView from '@comps/UserView'
import fetching from '@src/helpers/fetching'
import { useEffect, useState } from 'react'

export default function UserPage({ user, recruiter = false }) {
  // GET user who is this user assigned for // BOSS

  const [assignedTo, setAssignedTo] = useState(null)
  useEffect(() => {
    if (user?.assignedTo) {
      fetching(`/talent?_id=${user.assignedTo}`).then((res) => {
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
      fetching(`/talent?assignedTo=${user._id}`).then((res) => {
        // just get diference bettewn recruits and bosses
        const bosses = res.filter((item) => !item.rol.includes('recruit'))
        const recruiters = res.filter((item) => item.rol.includes('recruit'))
        setAssignments(bosses)
        setRecruiters(recruiters)
      })
    }
  }, [user])
  const [recruiters, setRecruiters] = useState([])
  console.log(recruiters, assignments)
   

  useEffect(() => {
    if (recruiter) {
      // if is a recruiter overwrite recruites 
      fetching(`/talent?recruitedBy=${user._id}`).then(setRecruiters)
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
  return (
    <UserView
      user={user}
      assignedTo={assignedTo}
      assignments={assignments}
      recruiters={recruiters}
      recruiter={recruiter}
    />
  )
}
