import Layout from '@src/Layout'
import Market from '@comps/Market'
import Head from 'next/head'
export default function MarketPage() {
  return (
    <>
      <Head>
        <title>Market - Talent Market</title>
      </Head>
      <Layout Component={Market} />
    </>
  )
}
