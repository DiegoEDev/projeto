import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banners from '../components/banners';
import Animais from '../components/animais';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mini zoo</title>
        <meta name="description" content="Mini zoo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banners />
		<Animais />
      </main>
    </div>
  )
}
