import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import { Nav } from './components/nav.component'



const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <h1>4 ways to have your data rendered</h1>
    </main>
  )
}

export default Home
