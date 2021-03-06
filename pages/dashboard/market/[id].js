import NewTalent from '@comps/NewTalent'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function MarketNew() {
  const [talent, setTalent] = useState(null)
  const {
    query: { id },
  } = useRouter()
  useEffect(() => {
    if (id) {
      fetching(`/talent/${id}`).then(setTalent)
    }
  }, [id])
  console.log(talent)
  return (
    <>
      <Head>
        <title>Edit Talent - Talent Market</title>
      </Head>
      <Layout Component={NewTalent} title="Edit Talent" talent={talent} />
    </>
  )
}
