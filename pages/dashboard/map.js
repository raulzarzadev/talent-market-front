import Layout from '@src/Layout'
import Map from '@comps/Map'
import { useEffect, useState } from 'react'
import fetching from '@src/helpers/fetching'
export default function MarketPage() {
  const [talents, setTalents] = useState([])
  useEffect(() => {
    fetching(`/talent?rol=recruit`).then(setTalents)
  }, [])
  return <Layout Component={Map} talents={talents} />
}
