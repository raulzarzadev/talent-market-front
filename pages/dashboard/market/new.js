import NewTalent from '@comps/NewTalent'
import Layout from '@src/Layout'
import Head from 'next/head'
export default function MarketNew() {
  return (
    <>
      <Head>
        <title>New Talent - Talent Market</title>
      </Head>
      <Layout Component={NewTalent} />
    </>
  )
}
