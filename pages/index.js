import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ButtonLink from '@comps/Link/ButtonLink'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-center" style={{ minHeight: 500 }}>
        <main className={styles.main}>
          <ButtonLink href="/dashboard" color="primary" variant="contained">
            Dashboard
          </ButtonLink>
        </main>
      </div>

      <footer className={styles.footer}>Una app maquetada por <a href='https://raulzarza.com'>RZ</a> </footer>
    </div>
  )
}
