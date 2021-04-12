import SelectUser from '@comps/SelectUser'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Principals() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetching('/talent?rol=principal').then(setUsers)
  }, [])
  return (
    <>
      <Head>
        <title>Principals - Talent Market</title>
      </Head>
      <Layout Component={SelectUser} users={users} title="Principals" />
    </>
  )
}
