import TalentsGrid from '@comps/TalentsGrid'
import fetching from '@src/helpers/fetching'
import MarketLayout from '@src/Layout/MarketLayout'
import { useEffect, useState } from 'react'

export default function Market() {
  const [talents, setTalents] = useState([])
  useEffect(() => {
    fetching(`/talent?rol=recruit`).then(setTalents)
  },[])
  return <MarketLayout Component={TalentsGrid} title="Market" talents={talents} />
}
