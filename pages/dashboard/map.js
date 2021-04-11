import Layout from '@src/Layout'
import { useEffect, useState } from 'react'
import fetching from '@src/helpers/fetching'
import TalentMapList from '@comps/TalentMapList'
export default function MarketPage() {
  const [talents, setTalents] = useState([])
  useEffect(() => {
    fetching(`/talent?rol=recruit`).then(setTalents)
  }, [])
  return <Layout Component={TalentMapList} talents={talents} />
}
