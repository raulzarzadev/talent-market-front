import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ButtonLink from '@comps/Link/ButtonLink'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talent Market</title>
        <link rel="icon" href="/assets/group_icon.svg" />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A simple dashboard to manage talent for a talent company. " />
      </Head>
      <div className="flex-center" style={{ minHeight: 500 }}>
        <main className={styles.main}>
          <ButtonLink href="/dashboard" color="primary" variant="contained">
            Dashboard
          </ButtonLink>
        </main>
      </div>

      <footer className={styles.footer}>
        Una app maquetada por <a href="https://raulzarza.com">RZ</a>{' '}
      </footer>
    </div>
  )
}
