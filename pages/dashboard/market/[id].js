import NewTalent from '@comps/NewTalent'
import fetching from '@src/helpers/fetching'
import Layout from '@src/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function MarketNew() {
  const [talent, setTalent] = useState(null)
  const {
    query: { id },
  } = useRouter()
  useEffect(() => {
    if (id) {
      fetching(`/candidate/${id}`).then(setTalent)
    }
  }, [id])
  console.log(talent)
  return <Layout Component={NewTalent} talent={talent} />
}
