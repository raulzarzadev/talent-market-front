import SelectUser from '@comps/SelectUser'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import { useEffect, useState } from 'react'

export default function Principals() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetching('/talent?rol=principal').then(setUsers)
  }, [])
  return <Layout Component={SelectUser} users={users} title='Principals'/>
}
