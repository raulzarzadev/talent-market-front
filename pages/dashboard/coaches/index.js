import SelectUser from '@comps/SelectUser'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import { useEffect, useState } from 'react'

export default function Coachs() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetching('/user?rol=coach').then(setUsers)
  }, [])
  return <Layout Component={SelectUser} users={users} title="Coaches" />
}
