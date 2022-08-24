import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Nav } from './components/nav.component'

const Isr: NextPage = () => {
    return <main className={styles.main}>
        <Nav />
        <h1> Incremental Site Rendering </h1>
    </main>
}

export default Isr;