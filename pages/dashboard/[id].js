import UserPage from '@comps/UserPage'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function User() {
  const [user, setUser] = useState(undefined)
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    fetching(`/talent?_id=${id}`).then((res) => setUser(res[0]))
  }, [id])

  if (user === undefined) return 'Loading ...'

  return (
    <>
      <Head>
        <title>User Details - Talent Market</title>
      </Head>
      <Layout Component={UserPage} user={user} />
    </>
  )
}
