import UserPage from '@comps/UserPage'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function User() {
  const [user, setUser] = useState({})
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    fetching(`/talent?_id=${id}`).then((res) => setUser(res[0]))
  }, [id])
  const isRecruiter = user?.rol?.includes('recruiter')

  return <Layout Component={UserPage} user={user} recruiter={isRecruiter} />
}
