import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/dashboard">Entrar</Link>
      </main>

      <footer className={styles.footer}>Una app maquetada por RZ</footer>
    </div>
  )
}
